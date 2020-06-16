<?php

namespace App\Jobs;

use App\Helpers\AwsClient;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductDetail;
use App\Models\ProductStar;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class AwsCrawlerDetail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $seller_id;

    const TIME_OUT = 300; // second

    protected $detailProductUrl;
    protected $asin;

    /**
     * Create a new job instance.
     * @param $sellerId
     * @param $detailProductUrl
     * @param $asin
     * @return void
     */
    public function __construct($sellerId, $detailProductUrl, $asin = null)
    {
        $this->seller_id = $sellerId;
        $this->detailProductUrl = $detailProductUrl;
        $this->asin = $asin;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        set_time_limit(self::TIME_OUT);

        Log::debug("Start crawl product detail, url = " . $this->detailProductUrl);
        if ($this->checkAlreadyCrawl()) {
            Log::debug('product already crawl, end this product!');
            return;
        }

        try {
            $html = AwsClient::getContent($this->detailProductUrl);
            if (is_array($html)) {
                Log::debug('ignore this product content = ', $html);
                return;
            }

            $html = str_get_html($html);
            if (!$html) {
                Log::debug("content null");
                AwsClient::cleanHtml($html);
                return;
            }

            $arrProduct = $this->getProductData($html);
            $productDetail = $this->getProductDetail($html);
            $productStar = $this->getProductReviewStartDetail($html, $productDetail['review_count']);

            if (!empty($arrProduct['asin'])) {
                Log::debug('save product: ', $arrProduct);

                $product = Product::saveProduct($arrProduct, $this->asin);
                ProductDetail::saveProductDetail($product, $productDetail);
                ProductStar::saveProductStar($product, $productStar);
                Category::saveCategory($product, ['name' => $productDetail['category']]);
            }
            AwsClient::cleanHtml($html);
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
        }
        return;
    }

    public function checkAlreadyCrawl()
    {
        if ($this->asin) {
            $product = Product::where('asin', $this->asin)->first();
        } else {
            $product = Product::where('detail_aws_url', $this->detailProductUrl)->first();
        }

        if (!$product) {
            return false;
        }

        return ProductDetail::where('product_id', $product->id)
            ->whereDate('created_at', Carbon::now()->format('Y-m-d'))
            ->first();
    }

    /**
     * get product data from html dom
     * @param $html
     * @return array
     */
    public function getProductData($html)
    {
        $asin = $html->find('#cerberus-data-metrics', 0);
        if ($asin) {
            $asin = $asin->getAllAttributes();
        }

        $img = $html->find('#imgTagWrapperId img', 0);
        if ($img) {
            $img = $img->getAttribute('data-old-hires');
        }

        $sellAt = $html->find('.date-first-available .value', 0)->plaintext ?? null;

        if (!$sellAt) {
            $sellAt = $html->find('#productDetailsTable ul li', 4)->plaintext ?? null;
            $sellAt = str_replace('Amazon.co.jp での取り扱い開始日:', '', $sellAt);
        }

        return [
            'name' => $html->find('#productTitle', 0)->plaintext ?? null,
            'url_img' => $img,
            'asin' => $asin['data-asin'] ?? null,
            'seller_id' => $this->seller_id,
            'sell_at' => trim($sellAt),
            'detail_aws_url' => $this->detailProductUrl,
        ];
    }

    /**
     * get product detail from html dom
     * @param $html
     * @return array
     */
    public function getProductDetail($html)
    {
        $asin = $html->find('#cerberus-data-metrics', 0);
        if ($asin) {
            $asin = $asin->getAllAttributes();
        }

        $avgReview = $html->find('#acrPopover', 0)->title ?? 0;
        $acrCustomerReviewText = $html->find('#acrCustomerReviewText', 0)->plaintext ?? 0;

        $ranking = $html->find('#SalesRank .value', 0)->innertext ?? 0;

        if (!$ranking) {
            $ranking = $html->find('#SalesRank', 0)->innertext ?? 0;
        }

        if (!$ranking) {
            $ranking = $html->find('.pdTab', 1)->innertext ?? 0;
        }

        $ranking = $this->getCatAndRank($ranking);
        return [
            'price' => str_replace(',', '', $asin['data-asin-price']) ?? 0,
            'currency_code' => $asin['data-asin-currency-code'] ?? 'JPY',
            'avg_review' => $this->getAvgReviewFromString($avgReview),
            'review_count' => $this->getNumberFromString($acrCustomerReviewText),
            'ranking' => $this->getRankingFromString($ranking),
            'category' => $this->getCatFromString($ranking),
        ];
    }

    /**
     * get start count for product review count
     * @param $html
     * @param $total
     * @return mixed
     */
    public function getProductReviewStartDetail($html, $total)
    {
        $arr['total_star'] = $total;
        for ($i = 1; $i <= 5; $i++) {
            $star = $this->getAStart($html, $i); // percent
            $star = ($star * $total) / 100;
            $arr["star_$i"] = (int)round($star);
        }

        return $arr;
    }

    /**
     * get data a star
     * @param $html
     * @param $int
     * @return int
     */
    public function getAStart($html, $int)
    {
        $star = $html->find("#histogramTable .{$int}star", 0);
        if (!$star) {
            return 0;
        }

        $star = $star->getAttribute('aria-label');
        $star = $this->getNumberFromString($star);
        $star = (int)preg_replace("/$int/", '', $star, 1);
        return $star;
    }

    /**
     * convert rate string to number
     * @param $str
     * @return mixed
     */
    public static function getAvgReviewFromString($str)
    {
        try {
            $str = explode('うち', $str);
            if (!$str) {
                Log::error("cannot get rate 1");
                return 0;
            }

            $matches = array_map('floatval', $str);
            if (empty($matches)) {
                return 0;
            }

            $matches = array_filter($matches);
            if (empty($matches)) {
                return 0;
            }

            return min($matches);
        } catch (\Exception $exception) {
            report($exception);
        }

        Log::error("cannot get rate 2");
        return 0;
    }

    /**
     * get category and product ranking
     * @param $str
     * @return string
     */
    public function getCatAndRank($str)
    {
        if (!$str) {
            return $str;
        }

        $str = preg_replace('#(<a.*?>).*?(</a>)#m', '$1$2', $str);
        $str = preg_replace('#(<ul.*?>).*?(</ul>)#m', '$1$2', $str);
        $str = preg_replace('#(<b.*?>).*?(</b>)#m', '$1$2', $str);
        $str = preg_replace('#(<tr.*?>).*?(</tr>)#m', '$1$2', $str);
        $str = preg_replace('#(<style.*?>).*?(</style>)#m', '$1$2', $str);
        $str = trim(strip_tags($str));
        $str = str_replace('()', '', $str);

        return trim($str);
    }

    /**
     * get product ranking from string
     * @param $str
     * @return int
     */
    public function getRankingFromString($str)
    {
        if (!$str) {
            return $str;
        }

        $ranking = explode('-', $str);

        if (!isset($ranking[1])) {
            return 0;
        }

        return $this->getNumberFromString($ranking[1]);
    }

    /**
     * get category from string
     * @param $str
     * @return int|string
     */
    public function getCatFromString($str)
    {
        if (!$str) {
            return '未定';
        }

        $ranking = explode('-', $str);

        if (!isset($ranking[0])) {
            return '未定';
        }

        return trim($ranking[0]);
    }

    /**
     * get number from string
     * @param $str
     * @return int
     */
    public function getNumberFromString($str)
    {
        if (!$str) {
            return 0;
        }

        return (int)filter_var($str, FILTER_SANITIZE_NUMBER_INT);
    }
}