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

            //��õ���Ŀ
            return [
                'success'=>1,
                'msg'=>'����ɹ�',
                'content'=>[
                    ['id'=>1,'name'=>'lovean','time'=>time()],
                    ['id'=>2,'name'=>'mylove','time'=>time()],
                    ['id'=>2,'name'=>'ilike','time'=>time()],
                ]
            ];

        }


    }


?>