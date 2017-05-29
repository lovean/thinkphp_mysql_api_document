<?php
namespace app\index\controller;

header('Access-Control-Allow-Origin:*');
class Index
{
    public function index(){
       //首页
        return view();
    }

    public function admin(){
        return view();
    }

    public function project(){
        return view();
    }

    public function login(){
        $password = input("password");
        $user = Model('user')->where("password",$password)->find();
        if(empty($user)){
            return ['success'=>0];
        }else{
            cookie("password",$password,360000);
            return [
                'success'=>1,
                'showProjects'=>json_decode($user['showprojects'],true),
                'adminProjects'=>json_decode($user['adminprojects'],true)
            ];
        }
    }
}
