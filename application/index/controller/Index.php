<?php
namespace app\index\controller;
header('Access-Control-Allow-Origin:*');
class Index
{
    public function index(){

    }
    public function login(){
        return ['success'=>1];
    }
}
