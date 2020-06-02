<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Mail;
use App\Post;

class SendPostEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $post;
    public function __construct(Post $post)
    {
        //
        $this->post= $post;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
         $data= array(
         'title'=> $this->post->title,
         'body'=> $this->post->body,
        );

    Mail::send('post', $data, function($message){
    $message->from('contact@ndnapps.com', 'Laravel Queues');
    $message->to('dangthanh151293@gmail.com')->subject('There is a new post');
    });
    }
}
