<?php
namespace App\Http\Controllers;
 
use App\Image;
use App\Jobs\ProcessImageThumbnails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
Use App\Jobs\SendPostEmail;
use Validator;
use Mail;
use App\Post;
use App;
use Aws;
use Aws\S3\S3ClientInterface;
use Aws\CacheInterface;
use Aws\LruArrayCache;
use Aws\Result;
use Aws\S3\Exception\S3Exception;
use GuzzleHttp\Psr7;
use GuzzleHttp\Psr7\Stream;
use GuzzleHttp\Psr7\CachingStream;
use Psr\Http\Message\StreamInterface;
// use Aws\Common\Aws;
use Aws\CloudSearchDomain\CloudSearchDomainClient;
use Config;
use GuzzleHttp\Client;
 
class ImageController extends Controller
{
    /**
     * Show Upload Form
     *
     * @param  Request  $request
     * @return Response
     */
    public function index(Request $request)
    {
        // $cloudSearchDomain = App::make('aws')->createClient('cloudsearchdomain', [
        //     'endpoint' => 'https://www.amazon.com/gp/product/B006KEILD8',
        // ]);
//         $client = CloudSearchDomainClient::factory(array(
//     'version' => 'latest',
//     'endpoint' => 'https://www.amazon.com/Xbox-Wireless-Controller-Cyberpunk-Limited-one/dp/0000031852'
// ));
//         dd($client) ;


// $curl = curl_init();

// curl_setopt_array($curl, array(
//     CURLOPT_URL => "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=US&keyword=%3Crequired%3E",
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_FOLLOWLOCATION => true,
//     CURLOPT_ENCODING => "",
//     CURLOPT_MAXREDIRS => 10,
//     CURLOPT_TIMEOUT => 30,
//     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//     CURLOPT_CUSTOMREQUEST => "GET",
//     CURLOPT_HTTPHEADER => array(
//         "x-rapidapi-host: amazon-product-reviews-keywords.p.rapidapi.com",
//         "x-rapidapi-key: 61724e7483msh751eb8325a39f88p15a20ajsn5d66e9624cc3"
//     ),
// ));

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
//     echo "cURL Error #:" . $err;
// } else {
//     echo $response;
// }

// dd($result);
         return view('test.upload_form');
    }
 
    /**
     * Upload Image
     *
     * @param  Request  $request
     * @return Response
     */
    public static function test_queue($image){
    	$full_image_path = public_path($image->org_path);
        $resized_image_path = public_path('thumbs' . DIRECTORY_SEPARATOR .  $image->org_path);
 
        // create image thumbs from the original image
        $img = \Image::make($full_image_path)->resize(300, 200);
        $img->save($resized_image_path);
    }
    public function upload(Request $request)
    {
        // upload image
        $this->validate($request, [
          'demo_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $imagel = $request->file('demo_image');
        $input['demo_image'] = time().'.'.$imagel->getClientOriginalExtension();
        $destinationPath = public_path('/images');
        $imagel->move($destinationPath, $input['demo_image']);
 
        // make db entry of that image
        $image = new Image;
        $image->org_path = 'images' . DIRECTORY_SEPARATOR . $input['demo_image'];
        $image->save();
 
        // defer the processing of the image thumbnails
        ProcessImageThumbnails::dispatch($image)->delay(20);
 		
        return Redirect::to('image/index')->with('message', 'Image uploaded successfully!');
    }


    public function mail()
	{
		return view('mail');
	}    
	public function store(Request $request)
	{
		$request->validate([
	       'title'=>'required|min:6',
	       'body'=> 'required|min:6',
		]);
	$post = new Post;
	$post->title = $request->title;
	$post->body = $request->body;
	$post->save();
	$this->dispatch(new SendPostEmail($post));
	 return redirect()->back()->with('status', 'Your post has been submitted successfully');
	}
    public function getData($url, $proxy = false)
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