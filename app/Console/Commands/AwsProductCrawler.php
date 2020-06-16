<?php

namespace App\Console\Commands;

use App\Jobs\AwsCrawlerLink;
use DB;
use Illuminate\Console\Command;

class AwsProductCrawler extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'aws:product';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'aws product crawler, run one time a week';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    const LIMIT = 25;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        DB::table('merchants')->orderBy('id')->chunk(self::LIMIT, function ($merchants) {
            foreach ($merchants as $merchant) {
                AwsCrawlerLink::dispatch($merchant);
            }
        });

        return;
    }
}