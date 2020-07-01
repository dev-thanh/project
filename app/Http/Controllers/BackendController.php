<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\User;
class BackendController extends Controller
{
    public function index(){
    	return view('backend.admin.index');
    }

    public function login(){
    	return view('backend.admin.login');
    }
    public function logout(){
    	Auth::logout();
        return redirect()->route('login');
    }
    public function boxed(){
    	return view('backend.admin.boxed');
    }

    public function register(){
    	return view('backend.admin.register');
    }

    public function Post_Register(Request $request){
    	$validator = Validator::make($request->all(), [
           'email' => 'required|email|unique:users',
           'password' => 'required|confirmed'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 404);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        return response()->json(['success' => 'Tạo thành công'], 200);
    }

    public function Post_Login(Request $request){
    	$validator = Validator::make($request->all(), [
           'email' => 'required',
           'password' => 'required'
       ]);
        if ($validator->fails()) {
            return redirect()->back()->with('errors',  $validator->errors());
        }
    	$login = [
            'email' => $request->email,
            'password' => $request->password,
            // 'level' => 1,
            // 'status' => 1
        ];
        if (Auth::attempt($login)) {
            return redirect('admin/index');
        } else {
            return redirect()->back()->with('status', 'Email hoặc Password không chính xác');
            //return response()->json(['success' => 'Email hoặc Password không chính xác'], 200);
        }
    }

    public function Google_Map(){
    	return view('backend.admin.google_map');
    }
}
