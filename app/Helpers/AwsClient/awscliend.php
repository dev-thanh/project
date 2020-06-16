<?php

namespace App\Helpers;

use App\Models\Proxy;
use Cache;
use Exception;
use GuzzleHttp\Client;
use Log;
use Symfony\Component\Process\Process;

class AwsClient
{
    const TIME_CACHE = 60; // minutes

    const CONNECT_TIME_OUT = 20; // second

    const TIME_OUT_RESPONSE = 60; // second

    /**
     * get content html from aws via proxy
     * @param $url
     * @param null $proxy
     * @return false|string|array
     */
    public static function getContent($url, $proxy = null)
    {
        $content = self::getData($url, $proxy);
        Log::debug("content type = " . gettype($content));

        if ($content && !empty($content) && is_string($content)) {
            $newContent = str_get_html($content);
            $titleraw = $newContent->find('title', 0);
            $title = $titleraw->innertext;
            Log::debug("title = $title");
            if (trim($title) != 'Amazon CAPTCHA') {
                if ($proxy && !Cache::has('proxy')) {
                    Cache::put('proxy', $proxy, self::TIME_CACHE);
                }
                self::cleanHtml($newContent);
                return $content;
            } else {
                self::deleteProxyNotWorking($proxy);
                Log::error("captcha is enabled");
            }
        } elseif (isset($content['error']) && ($content['code'] == 404)) {
            $code = $content['code'];
            Log::error("Code = $code , URL = " . $url);

            return [
                'error' => true,
                'code' => $code
            ];
        }

        Log::error('Fail to get content URL, start use proxy =' . $url);
        Log::debug('try to using proxy ...');

        Cache::forget('proxy');
        $proxy = self::getNewProxy();

        if ($proxy) {
            return self::getContent($url, $proxy);
        }

        Log::error('Cannot restart by proxy, end crawl!');

        return [
            'error' => true,
            'code' => 500
        ];
    }

    public static function getProxyType($proxy)
    {
        $ip = "{$proxy['ip']}:{$proxy['port']}";
        $proxyType = $ip;

        if ($proxy['socks5']) {
            $proxyType = "socks5://$ip";
        }

        if ($proxy['ssl']) {
            $proxyType = "https://$ip";
        }

        if ($proxy['socks4']) {
            $proxyType = "socks4://$ip";
        }

        if ($proxy['http']) {
            $proxyType = "http://$ip";
        }

        Log::debug('proxy type = ', [$proxyType]);
        return $proxyType;
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
                'connect_timeout' => self::CONNECT_TIME_OUT,
                'timeout' => self::TIME_OUT_RESPONSE,
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

    public static function getNewProxy()
    {
        Log::debug('============= start new proxy ==========');
        $proxy = self::getProxyFromDB();

        if (!$proxy) {
            Log::debug('============= empty proxy in db, start using docker ==========');
            $proxy = self::getNewProxyDocker();

            if ($proxy) {
                return $proxy;
            }

            return false;
        }

        if (self::checkProxyWorking($proxy)) {
            Log::debug("============= new proxy is = {$proxy} ==========");
            return $proxy;
        }

        return self::getNewProxy();
    }

    public static function getNewProxyDocker()
    {
        Log::error("=============== start restart docker ================");
        $dockerContainerId = env('DOCKER_CONTAINER_ID');
        $proxy = env('DOCKER_IPV4');

        if (!$dockerContainerId || !$proxy) {
            Log::error('not found docker container id, please insert it in env');

            return false;
        }

        Log::debug("DOCKER_CONTAINER_ID = $dockerContainerId");
        Log::debug("DOCKER_IPV4 = $proxy");

        $process = new Process(["docker restart $dockerContainerId"]);
        $process->run();

        $process = new Process(["curl -Lx  http://172.17.0.2:8118  http://jsonip.com/"]);
        echo $process->run();
        //shell_exec("docker restart $dockerContainerId");
        sleep(10);
//        $ipProxy = self::getData('http://jsonip.com/', env('DOCKER_IPV4'));
//        Log::debug("ipProxy = $ipProxy");

        return $proxy;
    }

    function getRandomUserAgent()
    {
        $userAgents = array(
            "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.8.1.6)    Gecko/20070725 Firefox/2.0.0.6",
            "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)",
            "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)",
            "Opera/9.20 (Windows NT 6.0; U; en)",
            "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 8.50",
            "Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.1) Opera 7.02 [en]",
            "Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; fr; rv:1.7) Gecko/20040624 Firefox/0.9",
            "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/48 (like Gecko) Safari/48",
            "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/48 (like Gecko) Safari/48",
        );
        $random = rand(0, count($userAgents) - 1);

        return $userAgents[$random];
    }


    public static function getProxyFromDB()
    {
        $proxyData = Proxy::where('status', Proxy::WORKING)
            ->inRandomOrder()
            ->first();

        if (!$proxyData) {
            Log::debug("proxy empty in database!");
            return false;
        }

        $proxy = self::getProxyType($proxyData->toArray());
        return $proxy;
    }

    /**
     * check proxy is working with aws
     * @param $proxy
     * @return bool|resource
     */
    public static function checkProxyWorking($proxy)
    {
        try {
            $fixUrlToCheck = "https://www.amazon.co.jp";
            $content = self::getData($fixUrlToCheck, $proxy);
            Log::debug("content type = " . gettype($content));

            if ($content && !empty($content) && is_string($content)) {
                $newContent = str_get_html($content);
                $titleraw = $newContent->find('title', 0);
                $title = $titleraw->innertext;
                Log::debug("title = $title");
                if (trim($title) != 'Amazon CAPTCHA') {
                    self::cleanHtml($newContent);
                    return true;
                }
            }
        } catch (Exception $exception) {
            Log::error("Exception messages (checkProxyWorking) = {$exception->getMessage()}");
            Log::error("Exception code (checkProxyWorking) = {$exception->getCode()}");
        }

        self::deleteProxyNotWorking($proxy);
        return false;
    }

    /**
     * check proxy is alive
     * @param $proxy
     * @return bool
     */
    public static function checkProxyAlive($proxy)
    {
        $proxy_arr = explode(':', $proxy);
        $host = $proxy_arr[0];
        $port = $proxy_arr[1];
        $waitTimeoutInSeconds = 10;
        $check = @fsockopen($host, $port, $errCode, $errStr, $waitTimeoutInSeconds);

        if ($check) {
            return true;
        }

        Log::error("proxy [$proxy] not alive");
        self::deleteProxyNotWorking($host);
        return false;
    }

    public static function deleteProxyNotWorking($proxy)
    {
        if ($proxy) {
            Log::debug('start delete proxy not working = ' . $proxy);
            $proxy = explode(':', $proxy);
            $ip = str_replace('//', '', $proxy[1]);
            Proxy::where('ip', trim($ip))->delete();
        }
    }

    /**
     * run when not have any proxy in DB
     * @return bool|string
     */
    public static function getProxyFromApi($proxy = null)
    {
        Log::debug('start get proxy from api');

        if (Cache::has('API_PROXY')) {
            Log::error('api proxy error, try after one hour');
            return false;
        }

        try {
            $code = config('common.API_PROXY_CODE');
            if (!$code) {
                Log::error('not found API_PROXY_CODE');
                return false;
            }

            $urlApi = "http://incloak.com/api/proxylist.php?type=h&out=js&code={$code}&maxtime=500";

            $client = New Client();
            if (!$proxy) {
                $content = $client->get($urlApi);
                $body = $content->getBody()->getContents();
            } else {
                $content = $client->get($urlApi, ['proxy' => "tcp://$proxy"]);
                $body = $content->getBody()->getContents();
            }

            $body = json_decode($body, true);
            foreach ($body as $data) {
                $proxy = "{$data['ip']}:{$data['port']}";
                if (self::checkProxyWorking($proxy)) {
                    return $proxy;
                }
            }

            return false;
        } catch (Exception $exception) {
            Cache::put('API_PROXY', 1, 60);
            Log::error("cannot get proxy from api server, mess= " . $exception->getMessage());
        }

        return false;
    }

    public static function cleanHtml($html)
    {
        if ($html) {
            $html->clear();
            unset($html);
        }
    }
}