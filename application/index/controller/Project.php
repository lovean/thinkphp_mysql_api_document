<?php
namespace app\index\controller;

use app\index\model\Apis;

class Project{

    public function __construct()
    {
        $password = cookie("password");//密码
        $id = input("post.projectid");
        $flag = false;
        if(!empty($password)){
            //判断是否是这个项目的
            $userInfo = Model('user')->where('password',$password)->find();
            $showProjects = json_decode($userInfo['showprojects'],true);
            $adminProjects = json_decode($userInfo['adminprojects'],true);
            foreach ($showProjects as $k=>$v){
                if($v['id'] == $id)$flag = true;
            }
            foreach ($adminProjects as $k=>$v){
                if($v['id'] == $id)$flag = true;
            }
        }else{
            die();
        }
        if(!$flag){
            die();
        }
    }

    public function getProject(){

        $id = input('post.id');
        $id = 1;
        //查找项目
        $project  = Model('project')->where('id',$id)->find();
        //查找package
        $packages = Model('package')->where('projectid',$id)->select();
        foreach ($packages as $k=>$v){
            $apis = Model('apis')->where('packageid',$v['id'])->select();
            foreach ($apis as $v=>$v) {
                unset($apis[$k]['content']);
            }
            $packages[$k]['content'] = $apis;
        }
        $arr = array();
        $arr['title'] = $project['name'];
        $arr['packageList'] = $packages;

        return $arr;

    }

    public function getApi(){
        //查询api详情
        $id = input('post.id');

        $api = Model('apis')->where('id',$id)->find();

        return json_decode($api['content'],true);
    }


    //增加包
    public function addPackage(){
        $id = input('post.id');
        $name = input('post.name');
        $package = array();
        $package['projectid'] = $id;
        $package['packagename'] = $name;
        Model('package')->save($package);
    }

    //增加api
    public function addApi(){
        $id = input("post.id");
        $content = input("post.content");
        $name = input("post.name");
        $updateid = input("updateid");
        $where = array();
        $apis = array();
        $apis['content'] = $content;
        $apis['apiname'] = $name;
        if($updateid != '0'){
            $where['id'] = $updateid;
            return Model('apis')->where($where)->update($apis);
        }else{
            $apis['packageid'] = $id;
            return Model('apis')->save($apis);
        }

    }

    //删除
    public function delApi(){
        $id = input("id");
        $apis = Apis::get($id);
        return $apis->delete();
    }

}


?>