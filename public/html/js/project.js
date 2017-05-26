var vm = new Vue({
    el:'#main',
    data:{
        ApiPackage:{},
        ApiInfo:{},

    },
    methods:{
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },
        getProjectApiPackage:function () {
            //请求接口，改变数据
            this.ApiPackage = {'title':'停车场项目','packageList':
                [
                    {'id':1,'name':'用户接口','content':[
                        {'cid':1,'cname':'登陆接口'},
                        {'cid':2,'cname':'注册接口'}
                    ]},
                    {'id':2,'name':'测试接口','content':[
                        {'cid':1,'cname':'登陆接口'},
                        {'cid':2,'cname':'注册接口'}
                    ]},
                    {'id':3,'name':'公共接口','content':[
                        {'cid':1,'cname':'登陆接口'},
                        {'cid':2,'cname':'注册接口'}
                    ]}
                ]};
        },
        getApi:function (id) {
            vm.$data.ApiInfo = {
                'name':'注册接口',
                'url':'http://www.baidu.com',
                'methodType':'post',
                'in':[
                    {
                        'pname':'username',
                        'ptype':'String',
                        'plength':'20',
                        'pinfo':'必传'
                    },
                    {
                        'pname':'username',
                        'ptype':'String',
                        'plength':'20',
                        'pinfo':'必传'
                    }
                ],
                'out':[
                    {
                        'pname':'username',
                        'ptype':'String',
                        'plength':'20',
                        'pinfo':'必传'
                    },
                    {
                        'pname':'username',
                        'ptype':'String',
                        'plength':'20',
                        'pinfo':'必传'
                    }
                ],
                'info':"这个是一个说明"
            };
        }
    },
    created:function () {
        this.getProjectApiPackage();
    }
});