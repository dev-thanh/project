<?php
// ini_set('max_execution_time', 180);
// app/Jobs/ProcessImageThumbnails.php
namespace App\Jobs;
 
use App\Image as ImageModel;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ImageController;
 
class ProcessImageThumbnails implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    protected $image;
 
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(ImageModel $image)
    {
        $this->image = $image;
    }
 
    /**
     * Execute the job.
     *
     * @return void
     */

    public function handle()
    {
        // access the model in the queue for processing
        $image = $this->image;
        ImageController::test_queue($image);
        DB::table('images')->delete();
        // $a=0;
        // for ($i = 0; $i < 100000; $i++) {
        //     $ad = new ImageModel;
        //     $ad->org_path = 'image_'.$i;
        //     $ad->save();
        // }
        // $full_image_path = public_path($image->org_path);
        // $resized_image_path = public_path('thumbs' . DIRECTORY_SEPARATOR .  $image->org_path);
 
        // // create image thumbs from the original image
        // $img = \Image::make($full_image_path)->resize(300, 200);
        // $img->save($resized_image_path);    
    }
}