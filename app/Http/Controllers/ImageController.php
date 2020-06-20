<?php
namespace App\Http\Controllers;
 
use App\Image;
use App\User;
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
    protected $model;
    public function __construct(User $model,Image $image)
    {
        $this->model = $model;
        $this->image = $image;
    }
    public function Puaru_Vina4U($site){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Opera/9.80 (Series 60; Opera Mini/6.5.27309/34.1445; U; en) Presto/2.8.119 Version/11.10');
        curl_setopt($ch, CURLOPT_TIMEOUT, 40);
        curl_setopt($ch, CURLOPT_COOKIEFILE, "cookie.txt");
        curl_setopt($ch, CURLOPT_URL, $site);
        ob_start();
        return curl_exec ($ch);
        ob_end_clean();
        curl_close ($ch);
    }
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
//         $link = 'https://www.facebook.com/NextSportsOfficial/videos/264730791288193';
//         $url = $this->Puaru_Vina4U('https://www.amazon.com/Xbox-Wireless-Controller-Cyberpunk-Limited-one/dp/0000031852');
// if (preg_match_all('#<script async="true" src="(.+?)"></script>#is',$url, $_puaru))
// {
// $url = $this->Puaru_Vina4U($_puaru[1][2]);
// if (preg_match('#"height":360,"url":"(.+?)"},{"resolution":480,"type":"mp4","width":854,"height":480,"url":"(.+?)"},{"resolution":720,"type":"mp4","width":1280,"height":720,"url":"(.+?)"#is',$url, $_puaru))
// {
// $puaru['360'] = $_puaru[1]; $puaru['480'] = $_puaru[2]; $puaru['720'] = $_puaru[3];
// echo json_encode($puaru);
// }
// }    
        // $array=array('org_path'=>'dsfafdf55afds.jpg');
        // $this->image->Add_data($array);
        $user = $this->image->Delete_data(2);
        return $this->image->Get_data();
        // $key = config('mail.from')['address'];
        // dd($this->model);
        //  return view('test.upload_form');
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
    public function pay_test(Request $request){
        return 1;

 

    }
    public function curl($url) {
        $ch = @curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        $head[] = "Connection: keep-alive";
        $head[] = "Keep-Alive: 300";
        $head[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7";
        $head[] = "Accept-Language: en-us,en;q=0.5";
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $head);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
        $page = curl_exec($ch);
        curl_close($ch);
        return $page;
    }
    public function getFacebook($link){
        if(substr($link, -1) != '/' && is_numeric(substr($link, -1))){
            $link = $link.'/';
        }
        preg_match('/https:\/\/www.facebook.com\/(.*)\/videos\/(.*)\/(.*)\/(.*)/U', $link, $id); // link dạng https://www.facebook.com/userName/videos/vb.IDuser/IDvideo/?type=2&theater
        if(isset($id[4])){
            $idVideo = $id[3];
        }else{
            preg_match('/https:\/\/www.facebook.com\/(.*)\/videos\/(.*)\/(.*)/U', $link, $id); // link dạng https://www.facebook.com/userName/videos/IDvideo
            if(isset($id[3])){
                $idVideo = $id[2];
            }else{
                preg_match('/https:\/\/www.facebook.com\/video\.php\?v\=(.*)/', $link, $id); // link dạng https://www.facebook.com/video.php?v=IDvideo
                $idVideo = $id[1];
                $idVideo = substr($idVideo, 0, -1);
            }
        }
        $embed = 'https://www.facebook.com/video/embed?video_id='.$idVideo; // đưa link về dạng embed
        $get = $this->curl($embed);
        $data = explode('[["params","', $get); // tách chuỗi [["params"," thành mảng
        $data = explode('"],["', $data[0]); // tách chuỗi "],[" thành mảng
        
        $data = str_replace(
            array('\u00257B', '\u002522', '\u00253A', '\u00252C', '\u00255B', '\u00255C\u00252F', '\u00252F', '\u00253F', '\u00253D', '\u002526'),
            array('{', '"', ':', ',', '[', '\/', '/', '?', '=', '&'),
            $data[0]
        ); // thay thế các ký tự mã hóa thành ký tự đặc biệt
        //Link HD
        $HD = explode('[{"hd_src":"', $data);
        // dd($HD);
        $HD = explode('","', $HD[0]);
        $HD = str_replace('\/', '/', $HD[0]);
        //Link SD
        $SD = explode('"sd_src":"', $data);
        $SD = explode('","', $SD[0]);
        $SD = str_replace('\/', '/', $SD[0]);
        if($HD){
            $linkDownload['HD'] = $HD; // link download HD
        }
        if($SD){
            $linkDownload['SD'] = $SD; // link download SD
        }
        $imageVideo = 'https://graph.facebook.com/'.$idVideo.'/picture'; // get ảnh thumbnail
        $linkVideo = array_values($linkDownload);
        $return['linkVideo'] = $linkVideo[0]; // link video có độ phân giải lớn nhất
        $return['imageVideo'] = $imageVideo; // ảnh thumb của video
        $return['linkDownload'] = $linkDownload; // link download video
        return $return;
    }
}