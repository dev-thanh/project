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

Route::get('test-queue','TestController@test_queue')->name('test-queue');
Route::get('image/index', 'ImageController@index');
Route::post('image/upload', 'ImageController@upload');
Route::get('/mail', 'ImageController@mail');
Route::post('/posts', 'ImageController@store');
Route::post('abc', 'ImageController@abc');