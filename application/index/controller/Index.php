<?php
namespace app\index\controller;
header('Access-Control-Allow-Origin:*');
class Index
{
    public function index()
    {
        return ['name'=>'lovean'];
    }

    public function login(){

        $password  = input("post.password");
        cookie("password",$password);
        return ['success'=>1,'msg'=>'登录成功','content'=>['username'=>'lovean','password'=>$password]];
    }
}
