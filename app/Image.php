<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
	protected $table = 'images';
    public function Add_data($request){
    	$array=array($request);
    	return Image::insert($array);
    }
    public function Get_data(){
    	return self::get();
    }
    public function Delete_data($id){
    	return Image::destroy($id);
    }
}
