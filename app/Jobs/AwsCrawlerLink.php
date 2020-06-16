<?php

namespace App\Jobs;

use App\Helpers\AwsClient;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Mockery\Exception;

class AwsCrawlerLink implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    const CLASS_DETAIL_PRODUCT = '.a-text-normal';

    const TIME_OUT = 300;

    protected $seller;

    /**
     * Create a new job instance.
     * @param  $seller
     * @return void
     */
    public function __construct($seller)
    {
        $this->seller = $seller;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            set_time_limit(self::TIME_OUT);
            Log::debug('Start crawl product link, seller = ' . $this->seller->merchant_id);

            $awsBaseUrl = env('BASE_AWS_URL', config('common.default_aws_url'));
            $sellerBaseUrl = $awsBaseUrl . '/s?me=' . $this->seller->merchant_id;
            $endPage = $this->countPage($sellerBaseUrl);

            for ($i = 1; $i <= $endPage; $i++) {
                $urlWithPage = $sellerBaseUrl . '&page=' . $i;

                Log::debug('start get list products $urlAwsSeller =' . $urlWithPage);

                $html = AwsClient::getContent($urlWithPage);
                if (is_array($html)) {
                    continue;
                }

                $html = str_get_html($html);
                foreach ($html->find(self::CLASS_DETAIL_PRODUCT) as $productDetailUrl) {
                    if (!empty($urlDetail = $productDetailUrl->href)) {
                        $urlDetail = env('BASE_AWS_URL', 'https://www.amazon.co.jp') . $urlDetail;
                        AwsCrawlerDetail::dispatch($this->seller->id, $urlDetail);
                    }
                }
            }
        } catch (Exception $exception) {
            report($exception);
        }

        Log::debug('End crawl product, seller = ' . $this->seller->merchant_id);
        return;
    }

    private function countPage($urlAwsSeller)
    {
        Log::debug("Start get count page, url= {$urlAwsSeller}");
        $html = AwsClient::getContent($urlAwsSeller);
        if (is_array($html)) {
            return 0;
        }
        $html = str_get_html($html);
        // find end page more than 9 page
        $page = $html->find('.a-disabled', 1);
        if ($page && isset($page->plaintext)) {
            Log::debug("page count is {$page->plaintext}");
            $pageCount = $page->plaintext;
        }

        // find end page not more than 9 page
        $page = $html->find('.a-normal');
        if ($page) {
            $page = end($page);
            if (isset($page->plaintext)) {
                Log::debug("page count is {$page->plaintext}");
                $pageCount = $page->plaintext;
            }
        }

        AwsClient::cleanHtml($html);
        if (isset($pageCount)) {
            return $pageCount;
        }

        Log::error("======= Cannot get countPage urlAwsSeller = {$urlAwsSeller} or maybe count Page = 1");

        return 1;
    }
    public static function getData($url, $proxy = false)
    {
        $client = new Client();

        try {
            if (!$proxy) {
                $content = $client->get($url);
                return $content->getBody()->getContents();
            }

            $content = $client->get($url, [
                'proxy' => $proxy,
                'connect_timeout' => 20, 
                'timeout' => 60,
                'allow_redirects' => false,
                'headers' => [
                    'User-Agent' => 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
                ]
            ]);
            return $content->getBody()->getContents();
        } catch (Exception $exception) {
            Log::error("(getData) Exception messages  = {$exception->getMessage()}");
            Log::error("(getData) status code = {$exception->getCode()}");

            return [
                'error' => true,
                'code' => $exception->getCode()
            ];
        }
    }
}