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
}