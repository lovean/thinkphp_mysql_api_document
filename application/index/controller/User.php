<?php
    namespace app\index\controller;

    class User{

        public function __construct()
        {
            $password = session("password");
            if(empty($password)){
                die();
            }
        }

        public function getProject(){

            //获得到项目
            return [
                'success'=>1,
                'msg'=>'请求成功',
                'content'=>[
                    ['id'=>1,'name'=>'lovean','time'=>time()],
                    ['id'=>2,'name'=>'mylove','time'=>time()],
                    ['id'=>2,'name'=>'ilike','time'=>time()],
                ]
            ];

        }


    }


?>