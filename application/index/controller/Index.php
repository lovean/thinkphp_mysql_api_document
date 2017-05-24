<?php
namespace app\index\controller;

class Index
{
    public function index()
    {
        return ['name'=>'lovean'];
    }

    public function login(){
        return ['success'=>1,'msg'=>'登录成功','content'=>['username'=>'lovean']];
    }
}
