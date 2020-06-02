<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use App\http\Requests;
use App\Jobs\MetafieldsProducts;
use Validator;
use Response;
use ShopifyApp;
use Excel;
use File;
use Carbon\Carbon;
use App\Helper\CustomBladeCompiler;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\Rule;
use App\Helper\Trans;
use Illuminate\Http\UploadedFile;
use Image;
use App\Product_reviews;
use App\Customer_reviews;
use App\Reply_reviews;
use App\Setting_reviews;
class ProductreviewsController extends Controller
{
    //webhook/shop-redact
    public function shopRedact(){
        return http_response_code(200);
        exit;
    }
    public function customersRedact(){
        return http_response_code(200);
        exit;
    }
    public function customersDataRequest(){
        return http_response_code(200);
        exit;
    }
    //payment declined
    public function declined(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        //$shopifyDomain = $shop->shopify_domain;
        return view('backend.v2.declined');
    }
    //User guide
    public function userguide(Request $request)
    {
        return view('backend.v2.userguide');
    }

    public static function getCreatedAtAttribute($date,$setting)
    {   
        $date_format = Carbon::parse($date);
        return $date_format->format($setting);
    }
    //backend
    public function makeStringFriendly($text)
    {
        //Characters must be in ASCII
        $text = html_entity_decode($text);
        $text = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/','a',$text);
        $text = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/','e',$text);
        $text = preg_replace('/(ì|í|ị|ỉ|ĩ)/','i',$text);
        $text = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $text);
        $text = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $text);
        $text = preg_replace('/(ỳ|ý|ỷ|ỵ|ỹ)/','y',$text);
        $text = preg_replace('/(đ)/', 'd', $text);
        $text = preg_replace('/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẫ|Ẩ|Ă|Ằ|Ắ|Ẳ|Ặ|Ẵ)/','A', $text);
        $text = preg_replace('/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ể|Ễ|Ệ)/', 'E', $text);
        $text = preg_replace('/(Ì|Í|Ỉ|Ị|Ĩ)/', 'I', $text);
        $text = preg_replace('/(Ò|Ó|Ỏ|Ọ|Õ|Ô|Ồ|Ố|Ổ|Ộ|Ỗ|Ơ|Ờ|Ớ|Ở|Ợ|Ỡ)/','O', $text);
        $text = preg_replace('/(Ù|Ú|Ủ|Ụ|Ũ|Ư|Ừ|Ứ|Ử|Ự|Ữ)/', 'U', $text);
        $text = preg_replace('/(Ỳ|Ý|Ỷ|Ỵ|Ỹ)/', 'Y', $text);
        $text = preg_replace('/(Đ)/', 'D', $text);
        $text = preg_replace('/(!|@|"|#|\$|%|\^|\(|\)|{|}|\[|\]|\*|~|`|=|\+|\'|;|,|:|&|<|>|\?|\/)/', '', $text);
        
        $text = str_replace(' - ','-',$text);
        $text = str_replace('_','-',$text);
        $text = str_replace(' ','-',$text);
        //$text = ereg_replace('[^A-Za-z0-9-]', '', $text);
        
        $text = str_replace('----','-',$text);
        $text = str_replace('---','-',$text);
        $text = str_replace('--','-',$text);
        
        $text = strtolower($text);
        return $text;
    }

    public function get_allreview(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $array=array();        
        $all_reviews = array();
        $rep_review = array();
        $array_customer=array();
        $product = Product_reviews::where('shopify_domain','=',$shop->shopify_domain)->get();
        $setting = Setting_reviews::where('shopify_domain','=',$shop->shopify_domain)->first();
        $th = Customer_reviews::where('shopify_domain', '=' , $shop->shopify_domain)->where('status', '=' , '0')->orderBy('created_at', 'desc')->get();
        $reply = Reply_reviews::where('shopify_domain','=',$shop->shopify_domain)->get();

        foreach ($reply as $re) {
            $rep_review[$re->customer_id] = array('id'=>$re->id,'shopify_domain'=>$re->shopify_domain,'content'=>$re->content,'image'=>$re->image);
        }
        foreach($th as $key => $cus){
            $rep_merge = array_key_exists($cus->id,$rep_review) ? $rep_review[$cus->id] : [];
            $time = Carbon::parse($cus->created_at);
            if($setting){                    
                if($setting->timezone == 'none'){
                    $time_format = '';
                }else{
                    $time_format = $time->format($setting->timezone);
                }
            }else{
                $time_format = $time->format('Y.m.d');
            }
            $image = $cus->image==null ? '' : $cus->image;
            $array = array(
                "id"=>$cus->id,
                "name"=>$cus->name,
                "title"=>$cus->title,
                "email"=>$cus->email,
                "content"=>$cus->content,
                "rate"=>$cus->rate,
                "nation"=>$cus->nation,
                "image"=> $image,
                "video"=>$cus->video,
                "created_at"=>$time->format('Y.m.d H:i:s'),
                "time"=>$time_format,
                "reply"=>$rep_merge
                );
            $a = array($array);
            if(array_key_exists($cus->product_review_id,$array_customer)){
                array_push($array_customer[$cus->product_review_id],$array);
            }else{
                $array_customer[$cus->product_review_id]=$a;
            }                
        }
        foreach ($product as $k => $value) {
            if(array_key_exists($value->id,$array_customer)){               
                $all_reviews[$value->product_id] = $array_customer[$value->id];
            }
        }
        return json_encode($all_reviews);
    }

    public function publish_Toshop(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $put2 = [];
        $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
        // $json_array = $this->get_allreview();

        $html_view = View::make('frontend.form_review',compact('shop','setting'));
        $html_b64 = base64_encode((string) $html_view);
        $html_reviews_template = View::make('frontend.reviews_template',compact('shop','setting'));
        $pagination_reviews_rl = $setting->pagination_reviews==null ? 'page' : $setting->pagination_reviews;
        $ndn_translate_1 = isset(json_decode($setting->verified_buyer)->translate_thank) ? json_decode($setting->verified_buyer)->translate_thank : 'Thank you for submitting a review!';
        $ndn_translate_2 = isset(json_decode($setting->verified_buyer)->most_recent) ? json_decode($setting->verified_buyer)->most_recent : 'Mostrecent';
        $ndn_translate_3 = isset(json_decode($setting->verified_buyer)->oldest) ? json_decode($setting->verified_buyer)->oldest : 'Oldest';
        $ndn_translate_4 = isset(json_decode($setting->verified_buyer)->heighest_rating) ? json_decode($setting->verified_buyer)->heighest_rating : 'Heighest rating';
        $ndn_translate_5 = isset(json_decode($setting->verified_buyer)->lowest_rating) ? json_decode($setting->verified_buyer)->lowest_rating : 'Lowest rating';
        $ndn_translate_6 = isset(json_decode($setting->verified_buyer)->width_photo) ? json_decode($setting->verified_buyer)->width_photo : 'Width photo';

        $theme = $shop->api()->rest('GET','/admin/themes.json',['fields' => 'id,role'])->body->themes;
        $file_js=public_path( 'js/frontend/ndnapps_productreview.js');
        $public_path=url('/');
        $js_content = file_get_contents($file_js);
        $content_str = str_replace(array('ndnapps_product_review','pagination_reviews_rl','ndn_reviews_template_replace','ndn_translate_1','ndn_translate_2','ndn_translate_3','ndn_translate_4','ndn_translate_5','ndn_translate_6','ndn_public_path','ndn_status_app','ndn_template_review'),array($html_b64,$pagination_reviews_rl,$html_reviews_template,$ndn_translate_1,$ndn_translate_2,$ndn_translate_3,$ndn_translate_4,$ndn_translate_5,$ndn_translate_6,$public_path,$setting->status,$setting->reviews_template),$js_content);
        

        $file_css=public_path( 'css/frontend/ndnapps_product_review.css');
        $file_snippet = $setting->status==1 ? public_path( 'js/frontend/productreviews_snippet.js') : public_path( 'js/frontend/productreviews_snippet_default.js');
        $css_content = file_get_contents($file_css);
        $snippet_content = file_get_contents($file_snippet);
        
        foreach ($theme as  $_child) {
            if($_child->role == 'main'){

                // MetafieldsProducts::dispatch($shop,$_child);

                $add_js = ["key"=> "assets/ndnapps-productreview.js",
                        "value"=> $content_str];
                $add_css = ["key"=> "assets/ndnapps-productreview.css",
                "value"=> $css_content];
                $add_snippet = ["key"=> "snippets/ndn-productreviews.liquid",
                        "value"=> $snippet_content];

                $put = $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>$add_js]);
                $put_css = $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>$add_css]);
                $put_snipet = $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>$add_snippet]);
                $layout = $shop->api()->rest('GET','/admin/themes/'.$_child->id.'/assets.json',['asset'=>['key'=>'layout/theme.liquid']])->body->asset->value;
                if(!strpos($layout,'ndnapps-productreview.js') && !strpos($layout,'ndnapps-productreview.css')){
                    $new_layout = str_replace( "{{ content_for_header }}", "{{ 'ndnapps-productreview.css' | asset_url | stylesheet_tag }}\n{{ content_for_header }}\n<script src='{{ 'ndnapps-productreview.js' | asset_url }}' defer='defer'></script>",$layout );
                    $put2 =  $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>[ "key" => "layout/theme.liquid",'value'=>$new_layout]]);
                }

                break;
            }
        }
        return 1;
    }


    public static function get_Product_Id(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $product_array = array();
        $products = DB::table('product_reviews')->where('shopify_domain','=',$shop->shopify_domain)->get();
        foreach ($products as $value) {
            $product_array[$value->id] = $value->product_id;
        }
        return $product_array;
    }

    public static function get_Product($id_product){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
    //     $product =  $shop->api()->graph('{product(id: "gid://shopify/Product/'.$id_product.'"){
    //         title
    //         collections(first: 5) {
    //             edges {
    //               node {
    //                 handle
    //               }
    //             }
    //           }
    //     }
    // }')->body->product;
        $product =  $shop->api()->rest('GET','/admin/api/2020-01/products/'.$id_product.'.json?fields=id,title,handle,images')->body->product;
        // GET /admin/api/2020-01/products/#{product_id}.json?fields=id,images,title
        return $product;
    }

    public static function get_count_star($product_id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $product = DB::table('product_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->where('product_id','=',$product_id)->first();
        $review= DB::table('customer_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->where('product_review_id','=',$product->id)->get();
        $count_star = array("1","2","3","4","5");
        $count_value=array();
        $count_value["count_star"]=count($review);
        foreach ($count_star as $k => $value) {
            $star_1= DB::table('customer_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->where('product_review_id','=',$product->id)->where('rate','=',$value)->get();
            $count_value["star_".($k+1)]=count($star_1);
        }
        return json_encode($count_value);
    }

    public static function reply_array($id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $array_reply=array();
        $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->where('customer_id','=',$id)->get();
        try{
            if(count($reply)!=0){              
                $array_reply['id'] = $reply[0]->id;
                $array_reply['status'] = 1;
                $array_reply['shop'] = $shop->shopify_domain;
                $array_reply['content'] = $reply[0]->content;
                $time = Carbon::parse($reply[0]->created_at);
                $time_format = $time->format('Y.m.d H:i:s');
                $array_reply['time'] = $time_format;
                if($reply[0]->image !=null){                   
                    $array_reply['filename'] = $reply[0]->id.'_'.$reply[0]->image;
                }
            }
        }catch (Exception $e) {
            return 'error';
        }
        
        return json_encode($array_reply);
    }

    public static function reply_admin($reply){
        $array_reply=array();
        try{             
            $array_reply['id'] = $reply->id;
            $array_reply['status'] = 1;
            $array_reply['shop'] = $reply->shopify_domain;
            $array_reply['content'] = $reply->content;
            $time = Carbon::parse($reply->created_at);
            $time_format = $time->format('Y.m.d H:i:s');
            $array_reply['time'] = $time_format;
            if($reply->image !=null){                   
                $array_reply['filename'] = $reply->id.'_'.$reply->image;
            }
        }catch (Exception $e) {
            return 'error';
        }        
        return json_encode($array_reply);
    }

    public static function customer_reviews_info($review){
        $customer_detail=array();
        $customer_detail['title']=$review->title;
        $customer_detail['content']=$review->content;
        $customer_detail['name']=$review->name;
        $customer_detail['email']=$review->email;
        $customer_detail['rate']=$review->rate;
        $customer_detail['nation']=$review->nation;
        return json_encode($customer_detail);
    }

    public function index(Request $request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $domain =  $shop->shopify_domain;
        $reply_array = array();
        $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
        $reviews = DB::table('customer_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->orderBy('created_at', 'desc')->paginate(5);
        $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
        return view('backend.v2.productreviews.index', compact('shop','reply','reviews','setting'));
    }
    
    public function Test1(){
       $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        return view('backend.v2.productreviews.test.test1');
    }

    public function reply_Review(Request $request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $array_reply=array();
        try{
            if ($request->hasFile('reply-image')){
                $validator = Validator::make($request->all(), [
                    'file-image' => 'mimes:jpeg,png,jpg,gif,webp',
                ]);
                $filename = $request->file('reply-image');
                $name = $filename->getClientOriginalName();
                $imageName = $this->makeStringFriendly($name);
                $array=array('jpeg','png','jpg','gif','webp','JPEG','PNG','JPG','GIF','WEBP');
                $ext = substr($name, strrpos($name, '.') + 1);
                if ($validator->fails() || !in_array($ext, $array)) {
                    return 2;
                }
                $reply = new Reply_reviews;
                $reply->shopify_domain = $shop->shopify_domain;
                $reply->customer_id = $request->customer_id;
                $reply->content = $request->content;
                $reply->image = $imageName;

                // $reply->save();
                if($reply->save()){
                    $array_reply['id'] = $reply->id;
                    $array_reply['status'] = 1;
                    $array_reply['shop'] = $reply->shopify_domain;
                    $array_reply['content'] = $reply->content;
                    $time = Carbon::parse($reply->created_at);
                    $time_format = $time->format('Y.m.d H:i:s');
                    $array_reply['time'] = $time_format;
                    $array_reply['filename'] = $reply->id.'_'.$imageName;
                    $directory = public_path().'/images/backend/reply_images/'.$shop->shopify_domain;
                    if(!File::exists($directory)){
                        File::makeDirectory($directory);
                    }
                    $make = Image::make($filename->getRealpath());
                    $width = $make->width();
                    $height = $make->height();
                    $make->orientate();
                    if($width >= $height){
                        $medium = $make->resize(300, null, function ($constraint) {
                            $constraint->aspectRatio();
                        });
                    }else{                
                        $medium = $make->resize(null, 300, function ($constraint) {
                            $constraint->aspectRatio();
                        });
                    }
                    $medium->save($directory.'/'.$reply->id.'_'.$imageName);
                }
            }else{
                $reply = new Reply_reviews;
                $reply->shopify_domain = $shop->shopify_domain;
                $reply->customer_id = $request->customer_id;
                $reply->content = $request->content;
                $reply->save();
                $array_reply['id'] = $reply->id;
                $array_reply['status'] = 1;
                $array_reply['content'] = $reply->content;
                $time = Carbon::parse($reply->created_at);
                $time_format = $time->format('Y.m.d H:i:s');
                $array_reply['time'] = $time_format;
                $array_reply['shop'] = $reply->shopify_domain;
            }
            return json_encode($array_reply);
        }catch (Exception $e) {
            return 'error';
        }
    }

    public function delete_Reply($id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $reply = DB::table('reply_reviews')->where('shopify_domain','=',$shop->shopify_domain)->where('id','=',$id);
        $directory = public_path().'/images/backend/reply_images/'.$shop->shopify_domain.'/'.$id.'_'.$reply->get()[0]->image;
        if($reply->delete()){
            if(File::exists($directory)){
                File::delete($directory);
            }
        }
        return 1;
    }

    public function edit_Reply($id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $customer = DB::table('customer_reviews')->where('shopify_domain','=',$shop->shopify_domain)->where('id','=',$id)->get();
        return view('backend.v2.productreviews.edit_reply',compact('customer'));
    }

    public function post_edit_customer(Request $request, $id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        try{
            $array=[];
            $customer = Customer_reviews::find($id);
            $customer->title = $request->title;
            $customer->content = $request->content;
            $customer->email = $request->email;
            $customer->name = $request->name;
            $customer->rate = $request->rate;
            $customer->nation = $request->nation;
            if($customer->update()){
                $array['id']=$customer->id;
                $array['status']=1;
                $array['title']=$request->title;
                $array['content']=$request->content;
                $array['email']=$request->email;
                $array['name']=$request->name;
                $array['rate']=$request->rate;
                $array['nation']=$request->nation;
                $this->add_Metafields_Product($shop,$id,$customer->product_id);
                return json_encode($array);
            }
        }catch (Exception $e) {
            return 'error';
        }
        
    }

    public function delete_customer(Request $request, $id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $reviews = $this->query_filter($request);
        $customer = Customer_reviews::find($id);
        $array_image = json_decode($customer->image);
        if(Customer_reviews::destroy($id)){
            if($array_image !=''){               
                foreach ($array_image as $img) {                
                    $directory = public_path().'/images/frontend/customer_images/'.$id.'_'.$img;
                    File::delete($directory);
                }
            }
            Reply_reviews::where('shopify_domain','=',$shop->shopify_domain)->where('customer_id','=',$id)->delete();
            $reviews = $this->query_filter($request);
            $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
            $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
            $response = View::make('backend.v2.productreviews.ajax_load_reviews',compact('shop','reviews','reply','setting'));
            $data['total'] = $reviews->lastPage();
            $data['response'] = (string)$response;
            $this->add_Metafields_Product($shop,$id,$customer->product_id);
            return $data;
        }
    }

    public function form_review(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        return view('frontend.form_review',compact('shop'));
    }


    public function ratito_Star($shop,$id){
        $array=array();        
        $all_reviews = array();
        $array_customer=array();
        $th = Customer_reviews::where('shopify_domain', '=' , $shop->shopify_domain)->where('product_id','=',$id)->where('status', '=' , '0')->get();
        $count_reviews = count($th);
        if($count_reviews !=0){           
            $r1 =0;$r2 =0;$r3 =0;$r4 =0;$r5 =0;
            foreach($th as $key => $cus){               
                $time = '';
                if($cus->rate==1) $r1+=1;
                if($cus->rate==2) $r2+=1;
                if($cus->rate==3) $r3+=1;
                if($cus->rate==4) $r4+=1;
                if($cus->rate==5) $r5+=1;                
            }
            $total = $r1+$r2+$r3+$r4+$r5;
            $ratio = $r1*1+$r2*2+$r3*3+$r4*4+$r5*5;
            $ratio_star = $ratio/$total;
            return array('count'=>$count_reviews,'ratio_star'=>$ratio_star);
        }
        return array('count'=>0,'ratio_star'=>0);
    }

    public function add_Metafields_Product($shop,$id,$product_id){
        $array = $this->ratito_Star($shop,$product_id);
        $count = $array['count'];
        $ratio = $array['ratio_star'];
        // $product = Product_reviews::where(['shopify_domain'=>$shop->shopify_domain])->where('id','=',$product_review_id)->first();
        $metafields =  $shop->api()->rest('GET','/admin/products/'.$product_id.'/metafields.json')->body;
        $array_metafields = '';
        foreach ($metafields->metafields as $value) {
            if($value->namespace=='ndn_review'){
                $array_metafields = $value->id;
            }
        }
        if($array_metafields == ''){
            $metafield =  $shop->api()->rest('POST','/admin/products/'.$product_id.'/metafields.json',
            ["metafield" => 
                ["namespace"=> "ndn_review",
                    "key"=> "rate",
                    "value"=> "{\"ratio\": \"$ratio\",\"count\": \"$count\"}",
                    "value_type"=> "json_string"]]);
        }else{
            $metafield_put =  $shop->api()->rest('PUT','/admin/api/2020-04/metafields/'.$array_metafields.'.json',
            ["metafield" => [
                "id"=> $array_metafields,
                "value"=> "{\"ratio\": \"$ratio\",\"count\": \"$count\"}",
                "value_type"=> "json_string"]]);
        }
    }

    public function post_formreview(Request $request){
        try{
            $setting = Setting_reviews::where(['shopify_domain'=>$request->shopify_domain])->first();
            if(isset($_POST['g-recaptcha-response'])){               
                $ip = $_SERVER['REMOTE_ADDR'];
                $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$setting->recaptchar_key."&response=".$_POST['g-recaptcha-response']."&remoteip=".$ip);
                $responseKeys = json_decode($response,true);
                if(intval($responseKeys["success"]) !== 1) {
                    $responseArray = array('type'=>'recaptcha_false','message'=>'Please verify that you are not a robot.');
                    return response()->json($responseArray);
                }
            }

            $shops = DB::table('shops')->where('shopify_domain', '=', $request->shopify_domain)->first();
            $shop = \OhMyBrew\ShopifyApp\Models\Shop::where([
                                ['id' , '=', $shops->id]
                                ])->first();

            $_shopData = $shop->api()->rest('GET','/admin/api/2019-07/shop.json')->body->shop;

            $_timezone = 'America/New_York';
            if(!empty($_shopData->iana_timezone)){
                 $_timezone = $_shopData->iana_timezone;
            }
            date_default_timezone_set($_timezone); //get default timezone from setting
            $now = date('Y-m-d H:i:s');
            $dtz = new \DateTimeZone($_timezone);
            $time_in_store = new \DateTime('now', $dtz);

            $check_product = Product_reviews::where('shopify_domain','=',$request->shopify_domain)->where('product_id', $request->product_id)->first();
            if ($check_product === null) {
                $product_review = new Product_reviews;
                $product_review->shopify_domain = $request->shopify_domain;
                $product_review->product_id = $request->product_id;
                $product_review->status = 0;
                $product_review->created_at = $time_in_store;
                $product_review->save();
            }         
            $model = new Customer_reviews;
            $model->shopify_domain = $request->shopify_domain;
            $model->product_id = $request->product_id;
            $model->title = $request->title;
            $model->rate = $request->rate;
            if($check_product === null){
                $model->product_review_id = $product_review->id;
            }else{
                $model->product_review_id = $check_product->id;
            }
            $model->name = $request->name;
            $model->email = $request->email;
            $model->status = 1;
            $model->content = $request->content;
            $model->created_at = $time_in_store;
            $exe_flg = true;
            if ($request->hasFile('file')){
                $allowedfileExtension=['jpg','png','gif','jpeg'];
                $filename = $request->file('file');
                $image_str = [];
                $image_name = [];
                foreach ($filename as $n => $file){
                    $extension = $file->getClientOriginalExtension();
                    $check=in_array($extension,$allowedfileExtension);
                    if(!$check) {
                        $exe_flg = false;
                        break;
                    }
                    $filenames = $file->getClientOriginalName();
                    $imageName = $this->makeStringFriendly($filenames);
                    array_push($image_name,$imageName);
                }
                $model->image = json_encode($image_name);
            }
            if($exe_flg){                
                if($model->save()){
                    
                    $email_subject = str_replace('{product_name}', $request->product_name, $setting->email_subject);
                    $customemailhtml = $setting->email_message_template;
                    $customemailhtml = str_replace("{rate}",$request->rate,$customemailhtml);
                    $customemailhtml = str_replace("{name}",$request->name,$customemailhtml);
                    $customemailhtml = str_replace("{email}",$request->email,$customemailhtml);
                    $customemailhtml = str_replace("{title}",$request->title,$customemailhtml);
                    $customemailhtml = str_replace("{content}",$request->content,$customemailhtml);                

                    if ($request->hasFile('file'))
                    {   
                        $img_rl='';
                        $directory = public_path().'/images/frontend/customer_images/';
                        foreach ($filename as $n => $file){
                            $filenames = $file->getClientOriginalName();
                            $imageName = $this->makeStringFriendly($filenames);
                            $src = url('').'/images/frontend/customer_images/'.$model->id.'_'.$imageName;                
                            $img_rl.='<img style="width: 100px" src="'.$src.'" alt="">';
                            $make = Image::make($file->getRealpath());
                            $make->orientate();
                            $make->save($directory.'/'.$model->id.'_'.$imageName);
                        }
                        $customemailhtml = str_replace("{image}",$img_rl,$customemailhtml);
                    }else{
                        $src = '';
                        $customemailhtml = str_replace("{image}",'',$customemailhtml);
                    }
                    $data_sendmail = array('customemailhtml'=>$customemailhtml);

                    $email_sentto = $setting->email_sentto;
                    $toLists = array();
                    if(isset($email_sentto)){
                        $toLists = explode(',', $email_sentto);
                        $toLists = array_map('trim',$toLists);
                    }

                    $email_cc = $setting->email_cc;
                    $ccLists = array();
                    if(isset($email_cc)){
                        $ccLists = explode(',', $email_cc);
                        $ccLists = array_map('trim',$ccLists);
                    }

                    $email_bcc = $setting->email_bcc;
                    $bccList = array();
                    if(isset($email_bcc)){
                        $bccList = explode(',', $email_bcc);
                        $bccList = array_map('trim',$bccList);
                    }
                    Mail::send('frontend.send_mail', $data_sendmail, function($message) use ($email_subject,$toLists,$ccLists,$bccList) 
                    {   
                        $message->subject($email_subject);
                        $message->to($toLists);
                        $message->cc($ccLists);
                        $message->bcc($bccList);
                        $message->from('contact@ndnapps.com', 'Ndnapps Product reviews');
                    });
                }
                $responseArray = array('type' => 'success', 'message' => 'ok',);
            }else{
                $responseArray = array('type' => 'danger', 'message' => 'Falied to upload. Only accept jpg, png, jpeg, gif photos.');
            }
        } catch (\Exception $e) {
            $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
        }

        return response()->json($responseArray);
    }

    public function ajax_load_reviews(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
        $reviews = DB::table('customer_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->orderBy('created_at', 'desc')->paginate(5);
        $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
        return response()->view('backend.v2.productreviews.ajax_load_reviews',compact('shop','reviews','reply','setting'));
    }

    public function status_review(Request $request, $id){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $data=[];
        $review = Customer_reviews::find($id);
        $review->status = $request->status;
        if($review->update()){
            $reviews = $this->query_filter($request);
            $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
            $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
            $response = View::make('backend.v2.productreviews.ajax_load_reviews',compact('shop','reviews','reply','setting'));
            $data['total'] = $reviews->lastPage();
            $data['response'] = (string)$response;
            $this->add_Metafields_Product($shop,$id,$review->product_id);
        }
        
        return $data;
    }
    public function query_filter($request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $reviews = Customer_reviews::where('shopify_domain', '=', $shop->shopify_domain);
        if ($request->has('active_reviews')) {
            $reviews->where(['status'=>0]);
        }
        if ($request->has('pending_reviews')) {
            $reviews->where(['status'=>1]);
        }
        if ($request->has('product_id_select') && $request->product_id_select !='') {
            $reviews->where(['product_id'=>$request->product_id_select]);
        }
        if ($request->has('filter_by_rating') && $request->filter_by_rating !=0) {
            $reviews->where(['rate'=>$request->filter_by_rating]);
        }
        if ($request->has('search') && $request->search != null) {
            $reviews->where('title', 'LIKE', '%' . $request->search . '%')->orWhere('content', 'LIKE', '%' . $request->search . '%');
        }
        if ($request->has('active_reviews')) {
            $reviews->where(['status'=>0]);
        }
        if ($request->has('pending_reviews')) {
            $reviews->where(['status'=>1]);
        }
        if ($request->has('product_id_select') && $request->product_id_select !='') {
            $reviews->where(['product_id'=>$request->product_id_select]);
        }
        if ($request->has('filter_by_rating') && $request->filter_by_rating !=0) {
            $reviews->where(['rate'=>$request->filter_by_rating]);
        }
        return $reviews->orderBy('created_at', 'desc')->paginate(5);
    }
    public function filter_ajax(Request $request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }

        $data=[];
        $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
        $reviews = $this->query_filter($request);
        $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
        $response = View::make('backend.v2.productreviews.ajax_load_reviews',compact('shop','reviews','reply','setting'));
        $data['total'] = $reviews->lastPage();
        $data['response'] = (string)$response;
        return $data;
    }

    public function setting_productreviews(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $setting = Setting_reviews::where(['shopify_domain'=>$shop->shopify_domain])->first();
        if($setting->email_message_template == null){
            $email_message_template_null = '
<p>Hello,</p>

<pre data-placeholder="Bản dịch" dir="ltr" id="tw-target-text">
You have a new comment from customer:
</pre>

<pre dir="ltr" id="tw-target-text">
Star rating: {rate}

Name: {name}

Email: {email}

Title: {title}

Content review: {content}

{image}
</pre>';
            return view('backend.v2.productreviews.setting',compact('setting','email_message_template_null'));
        }
        return view('backend.v2.productreviews.setting',compact('setting'));
    }

    public function save_setting_reviews(Request $request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $model = Setting_reviews::where(['shopify_domain'=>$shop->shopify_domain])->first();
        $array_translate = array(
            'rating_breakdown'=>$request->rating_breakdown,
            'verified_buyer'=>$request->verified_buyer,
            'write_review'=>$request->write_review,
            'rate'=>$request->rate,'name'=>$request->name,
            'email'=>$request->email,'title'=>$request->title,
            'content'=>$request->content,
            'image_video'=>$request->image_video,
            'uploadfile'=>$request->uploadfile,
            'send'=>$request->send,
            'translate_thank'=>$request->translate_thank,
            'most_recent'=>$request->most_recent,
            'oldest'=>$request->oldest,
            'heighest_rating'=>$request->heighest_rating,
            'lowest_rating'=>$request->lowest_rating,
            'width_photo'=>$request->width_photo,
        );
        $model->shopify_domain = $shop->shopify_domain;
        $model->status = $request->status;
        $model->timezone = $request->timezone;
        $model->reviews_template = $request->reviews_template;
        $model->item_perpage = $request->item_perpage;
        $pagination_reviews = $request->page_number ? $request->page_number : $request->load_more;
        $model->pagination_reviews = $pagination_reviews;
        $model->verify_icon = $request->verify_icon;
        $model->verified_buyer=json_encode($array_translate);
        $model->email_sentto = $request->email_sentto;
        $model->email_cc = $request->email_cc;
        $model->email_bcc = $request->email_bcc;
        $model->email_subject = $request->email_subject;
        $model->email_message_template = $request->email_message_template;
        $model->recaptchar_site = $request->recaptchar_site;
        $model->recaptchar_key = $request->recaptchar_key;
        $model->update();
        $file_js=public_path( 'js/frontend/ndnapps_productreview.js');
        $public_path=url('/');
        $js_content = file_get_contents($file_js);
         
        $setting = Setting_reviews::where(['shopify_domain'=>$shop->shopify_domain])->first();     
        $put2 = [];
        // $json_array = $this->get_allreview();
        $pagination_reviews_rl = $setting->pagination_reviews==null ? 'page' : $setting->pagination_reviews;

        $html_view = View::make('frontend.form_review',compact('shop','setting'));

        $html_b64 = base64_encode((string) $html_view);
        $configapp = View::make('frontend.config_app',compact('shop','setting'));
        $html_reviews_template = View::make('frontend.reviews_template',compact('shop','setting'));

        $content_str = str_replace(array('ndnapps_product_review','"ndn_config_app"','ndn_reviews_template_replace'),array($html_b64,$configapp,$html_reviews_template),$js_content);

        $file_css=public_path( 'css/frontend/ndnapps_product_review.css');
        $css_content = file_get_contents($file_css);

        $file_snippet = $setting->status==1 ? public_path( 'js/frontend/productreviews_snippet.js') : public_path( 'js/frontend/productreviews_snippet_default.js');
        $snippet_content = file_get_contents($file_snippet);

        $theme = $shop->api()->rest('GET','/admin/themes.json',['fields' => 'id,role'])->body->themes;

        foreach ($theme as  $_child) {
            if($_child->role == 'main'){
                // MetafieldsProducts::dispatch($shop,$_child);

                $add_js = ["key"=> "assets/ndnapps-productreview.js",
                        "value"=> $content_str];
                $add_css = ["key"=> "assets/ndnapps-productreview.css",
                "value"=> $css_content];
                $add_snippet = ["key"=> "snippets/ndn-productreviews.liquid",
                    "value"=> $snippet_content];

                $put = $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>$add_js]);
                $put_css = $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>$add_css]);
                $put_snipet = $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>$add_snippet]);

                $layout = $shop->api()->rest('GET','/admin/themes/'.$_child->id.'/assets.json',['asset'=>['key'=>'layout/theme.liquid']])->body->asset->value;
                if(!strpos($layout,'ndnapps-productreview.js') && !strpos($layout,'ndnapps-productreview.css')){
                    $new_layout = str_replace( "{{ content_for_header }}", "{{ 'ndnapps-productreview.css' | asset_url | stylesheet_tag }}\n{{ content_for_header }}\n<script src='{{ 'ndnapps-productreview.js' | asset_url }}' defer='defer'></script>",$layout );
                    $put2 =  $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>[ "key" => "layout/theme.liquid",'value'=>$new_layout]]);
                }

                $product_liquid = $shop->api()->rest('GET','/admin/themes/'.$_child->id.'/assets.json',['asset'=>['key'=>'templates/product.liquid']])->body->asset->value;
                if(!strpos($product_liquid,'ndnapps-productreview-main')){
                    $product_liquid_str = str_replace("{% section 'product-recommendations' %}" , "{% section 'product-recommendations' %}\n<div class='ndnapps-productreview-main' data-id='{{product.id}}'></div>",$product_liquid );
                    $start = '<script type="application/ld+json">';
                    $end = '</script>';
                    $new_product_liquid = preg_replace('#('.preg_quote($start).')(.*)('.preg_quote($end).')#siU', $start."{% include 'ndn-productreviews' %}".$end, $product_liquid_str);
                    $put2 =  $shop->api()->rest('PUT','/admin/themes/'.$_child->id.'/assets.json',['asset'=>[ "key" => "templates/product.liquid",'value'=>$new_product_liquid]]);
                }
                break;
            }
        }
        return 1;

    }
    public function total_ratio_ajax(){
        try{
            $product = Product_reviews::where('shopify_domain','=',$_GET['shop'])->where('product_id','=',$_GET['product_id'])->first();
            $array_review_empty = array('count'=>0,'total'=>0,'star_1'=>0,'star_2'=>0,'star_3'=>0,'star_4'=>0,'star_5'=>0);
            if(!$product){
                return $array_review_empty;
            }
            $customers = Customer_reviews::where('shopify_domain', '=' , $_GET['shop'])->where('product_review_id', '=' , $product->id)->where('status', '=' , '0')->get();
            $count = count($customers);
            if(count($customers)==0){
                return $array_review_empty;
            }
            $r1 =0;$r2 =0;$r3 =0;$r4 =0;$r5 =0;$rate=0;
            foreach($customers as $key => $cus){
                if($cus->rate==1) $r1+=1;
                if($cus->rate==2) $r2+=1;
                if($cus->rate==3) $r3+=1;
                if($cus->rate==4) $r4+=1;
                if($cus->rate==5) $r5+=1; 
                $rate+= $cus->rate;                      
            }

            $array_customer['count']=$count;
            $array_customer['total']=$rate/$count;
            $array_customer['star_1']=$r1;
            $array_customer['star_2']=$r2;
            $array_customer['star_3']=$r3;
            $array_customer['star_4']=$r4;
            $array_customer['star_5']=$r5;
            return $array_customer;
        } catch (\Exception $e) {
            return $e;
        } 
    }

    public function reviews_ajaxload(){
        try{
            $array=array();        
            $all_reviews = array();
            $rep_review = array();
            $array_customer=array();
            switch ($_GET['order']) {
                case 'time':
                    $array_order = array('0'=>'created_at','1'=>'desc');
                    break;
                case 'oldest':
                    $array_order = array('0'=>'created_at','1'=>'asc');
                    break;
                case 'rate':
                    $array_order = array('0'=>'rate','1'=>'desc');
                    break;
                case 'lowest':
                    $array_order = array('0'=>'rate','1'=>'asc');
                    break;
                case 'image':
                    $array_order = array('0'=>'image','1'=>'desc');
                    break;
                default:
                    // code...
                    break;
            }
            $product = Product_reviews::where('shopify_domain','=',$_GET['shop'])->where('product_id','=',$_GET['product_id'])->first();
            $setting = Setting_reviews::where('shopify_domain','=',$_GET['shop'])->first();
            $reviews = Customer_reviews::where('shopify_domain', '=' , $_GET['shop'])->where('status', '=' , '0')->where('product_review_id','=',$product->id)->orderBy($array_order['0'], $array_order['1'])->paginate($setting->item_perpage);
            $reviews_html = View::make('frontend.ajax_load_reviews',compact('reviews'));
            $reviews_encode = json_encode($reviews_html);

            $arr=array('last_page'=>$reviews->lastPage());
            $array_review =array();
            foreach ($reviews as $value) {
                $time = Carbon::parse($value->created_at);
                if($setting){                    
                    if($setting->timezone == 'none'){
                        $time_format = '';
                    }else{
                        $time_format = $time->format($setting->timezone);
                    }
                }else{
                    $time_format = $time->format('Y.m.d');
                }
                $reply = Reply_reviews::where('shopify_domain','=',$_GET['shop'])->where('customer_id','=',$value->id)->first();
                if(isset($reply)){
                    $value['reply'] = $reply;
                }else{
                    $value['reply'] = '';
                }
                $value['time'] = $time_format;
                array_push($array_review,$value);   
            }
            $arr['data'] = $array_review;
            return $arr;
        } catch (\Exception $e) {
            return $e;
        }      
            // echo '<pre>';print_r($array_review);
        // return view('frontend.ajax_load_reviews',compact('reviews'));
    }

    public function delete_rows_query_filter($request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $reviews = Customer_reviews::where('shopify_domain', '=', $shop->shopify_domain);
        if (isset($request['data']['active_reviews'])) {
            $reviews->where(['status'=>0]);
        }
        if (isset($request['data']['pending_reviews'])){
            $reviews->where(['status'=>1]);
        }
        if (isset($request['data']['product_id_select'])){
            $reviews->where(['product_id'=>$request['data']['product_id_select']]);
        }
        if (isset($request['data']['filter_by_rating']) && $request['data']['filter_by_rating'] !='0'){
            $reviews->where(['rate'=>$request['data']['filter_by_rating']]);
        }
        if (isset($request['data']['search']) && $request['data']['search'] != null) {
            $reviews->where('title', 'LIKE', '%' . $request['data']['search'] . '%')->orWhere('content', 'LIKE', '%' . $request['data']['search'] . '%');
        }
        if (isset($request['data']['active_reviews'])) {
            $reviews->where(['status'=>0]);
        }
        if (isset($request['data']['pending_reviews'])){
            $reviews->where(['status'=>1]);
        }
        if (isset($request['data']['product_id_select'])){
            $reviews->where(['product_id'=>$request['data']['product_id_select']]);
        }
        if (isset($request['data']['filter_by_rating']) && $request['data']['filter_by_rating'] !='0'){
            $reviews->where(['rate'=>$request['data']['filter_by_rating']]);
        }
        return $reviews->orderBy('created_at', 'desc')->paginate(5);
    }

    public function delete_rows(Request $request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $customers = DB::table('customer_reviews')->whereIn('id', $_GET['array'])->pluck('product_review_id');
        $reply_reviews = DB::table('reply_reviews')->whereIn('customer_id', $_GET['array'])-> get();

        if(DB::table('customer_reviews')->whereIn('id', $_GET['array'])->delete())
        {   
            $products = DB::table('product_reviews')->whereIn('id', $customers)->pluck('product_id');
            DB::table('reply_reviews')->whereIn('customer_id', $_GET['array'])->delete();
            /*  Delete image customer  */
            // return $_GET['arr'];
            foreach ($_GET['arr'] as $val) {
                if($val['image'] !=''){                    
                    $directory = public_path().'/images/frontend/customer_images/'.$val['id'];
                    foreach ($val['image'] as $img) {               
                        File::delete($directory.'_'.$img);
                    }
                }    
            }
            /*  Delete image reply  */
            foreach ($reply_reviews as $re) {
                $directory_rep = public_path().'/images/backend/reply_images/'.$shop->shopify_domain.'/'.$re->id.'_'.$re->image;
                if(File::exists($directory_rep)) {
                    File::delete($directory_rep);
                }
            }
            /*  Add Metafields Products  */
            foreach ($products as $value) {
                $this->add_Metafields_Product($shop,'',$value);
            }
            $reviews = $this->delete_rows_query_filter($request);
            $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
            $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
            $response = View::make('backend.v2.productreviews.ajax_load_reviews',compact('shop','reviews','reply','setting'));
            $data['total'] = $reviews->lastPage();
            $data['response'] = (string)$response;
            return $data;
        }
    }

    public function filter_by_product(Request $request){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }

        $data=[];
        $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
        $reviews = $this->query_filter($request);
        $reply = DB::table('reply_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->get();
        $response = View::make('backend.v2.productreviews.ajax_load_reviews',compact('shop','reviews','reply','setting'));
        $data['total'] = $reviews->lastPage();
        $data['response'] = (string)$response;
        return $data;
    }

    public function loadProducts(){
        $data = [];
        $shop = ShopifyApp::shop();
        if(!$shop){
           return response()->json(array('data'=> $data), 200);
        }
        $query_api = [];
        return response()->view('backend.v2.productreviews.load_products');
    }

    public function apiProductNew(Request $request){
        $data = [];
        $shop = ShopifyApp::shop();

        if(!$shop){

           return response()->json(array('data'=> $data), 200);

        }
        $params = $request->all();

        $start = !empty($params['start']) ? $params['start']  :  0;
        $page = !empty($params['start']) ? ($params['start']/15) + 1 : 1;
        $search = !empty($params['search']) ? trim($params['search']['value']) : '';
        $start_before = !empty($params['ndn_start']) ? $params['ndn_start'] : 0;
        $api = '';
        
        $query_api = '';
        $query_count = [];
        if(!empty($search)){
            $query_api =',query: "title:*'.str_replace("'", "\'", addslashes($search)).'*"';
            // $query_count['query'] = $search;
        }
        $query_count['limit'] = 15;
        $_next = ''; $_prev = '';
        $page_info = '';
        $tt = 'first';
       // return response()->json(array('data'=> $data), 200);
        if($page != 1){
            if($params['start'] > $start_before){
             $page_info =  !empty($params['next']) ? ',after:"'.$params['next'].'"': '';
            }
            else{
                $page_info =  !empty($params['prev']) ? ',before:"'.$params['prev'].'"': '';
                $tt = 'last';
            }            
        }
        
       
        try {
            $count = $shop->api()->rest('GET','/admin/products/count.json',$query_count)->body->count;
            $currencie = $shop->api()->rest('GET','/admin/api/2020-01/shop.json',$query_count)->body->shop->money_format;

            $api = $shop->api()->graph('{
                  products('.$tt.': 15'.$page_info.',sortKey: TITLE'.$query_api.') {
                    edges {
                      cursor
                      node {
                        storefrontId
                        id
                        title
                        featuredImage {
                          src
                        }
                      }
                    }
                    pageInfo {
                      hasPreviousPage
                      hasNextPage
                    }
                  }
                }
            ');
            $shopData =  $shop->api()->rest('GET','/admin/api/2019-07/shop.json')->body->shop;
            $money_format = $shopData->money_format;
            if(!empty($api)){
                $shopProducts = $api->body->products->edges;
                $data = [];
                $count_col = count($shopProducts);
                $prd_arr = [];
                if($page==1 && $count < $count_col) $count = $count_col;
                $i = 0;
                foreach ($shopProducts as  $product) {
                    
                    $img = '<span></span>';
                    if(!empty($product->node->featuredImage->src)){
                      $img = '<img class"thumbnail" width="50" src='.$product->node->featuredImage->src.' />'; 
                      $prd_arr["src"] = $product->node->featuredImage->src;
                    }else{
                       $prd_arr["src"] = 'http://www.placehold.it/40x40/EFEFEF/AAAAAA&text=.';
                    }
                  if($i == 0)
                   $_prev = $product->cursor;
                  if($i == $count_col-1)
                   $_next = $product->cursor;
                   $prd_id = trim(str_replace('gid://shopify/Product/', '', $product->node->id));
                   $_sort = $prd_id;
                   $prd_arr["id"] = $prd_id;
                   $prd_arr["title"] = $product->node->title;
                   $data[]= array($prd_arr,$img,$product->node->title,$_sort);
                   $i++;
                }
                $response = [ "draw"=> $params['draw'] + 1,
                              "recordsTotal"=> $count,
                              "recordsFiltered"=> $count,
                              "data"=> $data,
                              "pages" => $page,
                              // "begin" =>$params['start'],
                              "next" => $_next,
                              'prev' => $_prev,
                              'start' => $start,
                              'has_prev' => $api->body->products->pageInfo->hasPreviousPage,
                              'has_next' => $api->body->products->pageInfo->hasNextPage
                            ];
                return response()->json($response, 200);

            }
        } catch (\Exception $e) {
            return response()->json(array('data'=> $data), 200);
        }
    }





    /*  Test  */
    public function test_allreviews(){
        $shop = ShopifyApp::shop();
        if(!$shop){
            return redirect()->route('login');
        }
        $setting = DB::table('setting_reviews')->where('shopify_domain', '=', $shop->shopify_domain)->first();
        // $data = array(
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        //     array('shopify_domain'=>'thanh-dev.myshopify.com', 'product_review_id'=> 9,'product_id'=>4678616580233,'name'=>'Tran dang thanh','title'=>'My favorite watch','email'=>'fsddsf@gmail.com','content'=>'Estoy conforme con este reloj. Luce lindo. Evidentemente es sport. Me encanta su color arena. Además.','rate'=>4,'status'=>1),
        // );

        // Customer_reviews::insert($data);
        // return 1;
        // return view('frontend.config_app',compact('shop','setting'));
        return view('backend.v2.productreviews.test.test1');
        // $customer = Customer_reviews::find('206');
        // $array=array();        
        // $all_reviews = array();
        // $rep_review = array();
        // $array_customer=array();
        // $product = Product_reviews::where('shopify_domain','=',$shop->shopify_domain)->get();
        // $setting = Setting_reviews::where('shopify_domain','=',$shop->shopify_domain)->first();
        // $th = Customer_reviews::where('shopify_domain', '=' , $shop->shopify_domain)->get();
        // $reply = Reply_reviews::where('shopify_domain','=',$shop->shopify_domain)->get();

        // foreach ($reply as $re) {
        //     $rep_review[$re->customer_id] = array('id'=>$re->id,'shopify_domain'=>$re->shopify_domain,'content'=>$re->content,'image'=>$re->image);
        // }
        // foreach($th as $key => $cus){
        //     $rep_merge = array_key_exists($cus->id,$rep_review) ? $rep_review[$cus->id] : [];
        //     $time = Carbon::parse($cus->created_at);
        //     if($setting){                    
        //         if($setting->timezone == 'none'){
        //             $time_format = '';
        //         }else{
        //             $time_format = $time->format($setting->timezone);
        //         }
        //     }else{
        //         $time_format = $time->format('Y.m.d');
        //     }
        //     $array = array(
        //         "id"=>$cus->id,
        //         "name"=>$cus->name,
        //         "title"=>$cus->title,
        //         "email"=>$cus->email,
        //         "content"=>$cus->content,
        //         "rate"=>$cus->rate,
        //         "nation"=>$cus->nation,
        //         "image"=>$cus->image,
        //         "video"=>$cus->video,
        //         "time"=>$time_format,
        //         "reply"=>$rep_merge
        //         );
        //     $a = array($array);
        //     if(array_key_exists($cus->product_review_id,$array_customer)){
        //         array_push($array_customer[$cus->product_review_id],$array);
        //     }else{
        //         $array_customer[$cus->product_review_id]=$a;
        //     }                
        // }
        // foreach ($product as $k => $value) {
        //     $all_reviews[$value->product_id] = $array_customer[$value->id];
        // }
        // return json_encode($all_reviews);
        // $products = Product_reviews::where(['shopify_domain'=>$shop->shopify_domain])->get();
        // $array_customer=$this->ratito_Star($shop);
        // $all_reviews = array();
        // foreach ($products as $product) {
        //     // $all_reviews[$product->product_id] = $array_customer[$product->id]; 
        //     $ratio = round($array_customer[$product->id]['ratio']/$array_customer[$product->id]['total'],1);
        //     $count = $array_customer[$product->id]['count'];    
        //     $metafields =  $shop->api()->rest('GET','/admin/products/'.$product->product_id.'/metafields.json')->body;
        //     $array_metafields = '';

        //     foreach ($metafields->metafields as $value) {
        //         if($value->namespace=='ndn_review'){
        //             $array_metafields = $value->id;
        //         }
        //         // array_push($array_metafields,$value->namespace);
        //     }
        //     if($array_metafields == ''){

        //         $metafield =  $shop->api()->rest('POST','/admin/products/'.$product->product_id.'/metafields.json',
        //         ["metafield" => 
        //             ["namespace"=> "ndn_review",
        //                 "key"=> "rate",
        //                 "value"=> "{\"ratio\": \"$ratio\",\"count\": \"$count\"}",
        //                 "value_type"=> "json_string"]]);
        //     }else{
        //         $metafield_put =  $shop->api()->rest('PUT','/admin/api/2020-04/metafields/'.$array_metafields.'.json',
        //         ["metafield" => [
        //             "id"=> $array_metafields,
        //             "value"=> "{\"ratio\": \"$ratio\",\"count\": \"$count\"}",
        //             "value_type"=> "json_string"]]);
        //     }
        // }
        
        // $metafields_update =  $shop->api()->rest('GET','/admin/products/4678616547465/metafields.json')->body;
        //$th = $this->ratito_Star();
        // $view = response()->view('frontend.reviews_template',compact('shop'))->withHeaders(['Content-Type' => 'application/json']);
        // echo '<pre>';print_r($view);
        // return response()->view('frontend.reviews_template',compact('shop'))->withHeaders(['Content-Type' => 'application/json']);
        // $setting = Setting_reviews::where('shopify_domain','=',$shop->shopify_domain)->first();
        // $string = View::make('frontend.reviews_template',compact('shop','setting'));
        // $str = str_replace('thanh-dev.myshopify.com', 'replace', $string);
        // return base64_encode((string) $str);
        $tha = $this->add_Metafields_Product($shop,'206',$customer);
        return $tha;
        // $theme = $shop->api()->rest('GET','/admin/themes.json',['fields' => 'id,role'])->body->themes;
        // foreach ($theme as  $_child) {
        //     $product_liquid = $shop->api()->rest('GET','/admin/themes/'.$_child->id.'/assets.json',['asset'=>['key'=>'templates/product.liquid']])->body->asset->value;
        // }
        print_r($shop->shopify_email);die;
        dd(config('app.google_recaptcha_key'));
        echo '<pre>';print_r($product_liquid);
    }
    public function test_upload(Request $request){
        
    }
    
}

