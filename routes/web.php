<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get( 'admin/login', 'BackendController@login' )->name('login');
Route::get( 'admin/logout', 'BackendController@logout' )->name('logout');
Route::get( 'admin/register', 'BackendController@register' )->name('register');
Route::post( 'admin/post-register', 'BackendController@Post_Register' )->name('post-register');
Route::post( 'admin/post-login', 'BackendController@Post_Login' )->name('post-login');
Route::group(['middleware' => 'admin','prefix' => 'admin'], function () {
    Route::get( '/index', 'BackendController@index' )->name('index');
    Route::get( '/', 'BackendController@index' )->name('admin');
    Route::get( '/boxed', 'BackendController@boxed' )->name('boxed');
    Route::get( '/google-map', 'BackendController@Google_Map' )->name('google-map');
    //Route::post( '/user/{data}', 'UserController@postData' );
});

Route::get('test-queue','TestController@test_queue')->name('test-queue');
Route::get('image/index', 'ImageController@index');
Route::post('image/upload', 'ImageController@upload');
Route::get('/mail', 'ImageController@mail');
Route::post('/posts', 'ImageController@store');
Route::get('git-test', 'ImageController@git_Test')->name('git-test');



Route::post('pay-test', 'ImageController@pay_test')->name('pay-test');