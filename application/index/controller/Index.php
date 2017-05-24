<?php
namespace app\index\controller;

class Index
{
    public function index()
    {
        return ['name'=>'lovean'];
    }

    public function tt(){
        return ['name'=>'lovean'];
    }

    public function login(){

        $password  = input("post.password");
        cookie("lovean","1234");
        //创建session
        session("password",$password);
        return ['success'=>1,'msg'=>'登录成功','content'=>['username'=>'lovean','password'=>$password]];
    }
}
