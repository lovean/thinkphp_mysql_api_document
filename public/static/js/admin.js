var vm = new Vue({
    el:'#main',
    data:{
        ApiPackage:{},
        ApiInfo:{
            'name':'',
            'url':'',
            'methodType':'',
            'in':[
            ],
            'out':[
            ],
            'info':''
        },
        newPackageName:'',
        name:[],
        isNewApi:false,
        nowPackName:'',//当前包名
        inName:'',
        inType:'',
        inLength:'',
        inInfo:'',
        outName:'',
        outType:'',
        outLength:'',
        outInfo:'',
        id:'',
        updateid:0//标识更新id
    },
    methods:{
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },
        getProjectApiPackage:function () {
            //请求接口，改变数据
            axios.post(getProjectUrl,{id:this.getQueryString("id"),projectid:this.getQueryString("id")}).then(function (a) {
                console.log(a);
                vm.$data.ApiPackage  = a.data;
            });
        },
        getApi:function (id,packageName) {
            vm.$data.updateid = id;
            vm.$data.nowPackName = packageName;
            axios.post(getApiUrl,{id:id,projectid:this.getQueryString("id")}).then(function (a) {
                vm.$data.ApiInfo = a.data;
            });
        },
        //增加新包
        addNewPackage:function () {
            if(vm.$data.newPackageName!=''){
                //增加包
                axios.post(addPackageUrl,{name:vm.$data.newPackageName,projectid:this.getQueryString("id"),id:this.getQueryString("id")}).then(function (a) {
                    $('.addPackageName').modal('hide');
                    vm.getProjectApiPackage();
                });
            }
        },
        //增加一个新api
        addNewApi:function (packName,id) {
            vm.$data.nowPackName = packName;
            vm.$data.id = id;
            vm.$data.updateid = 0;//清空状态
            //初始化ApiInfo
            this.initApiInfo();
        },
        save:function () {
            axios.post(addApiUrl,{id:vm.$data.id,projectid:this.getQueryString("id"),updateid:vm.$data.updateid,name:vm.$data.ApiInfo.name,content:JSON.stringify(vm.$data.ApiInfo)}).then(function (a) {
                vm.getProjectApiPackage();
                alert("增加/修改成功");

            });
        },
        addOneInData:function () {
            //增加一个入参
            vm.$data.ApiInfo.in.push({
                'pname':vm.$data.inName,
                'ptype':vm.$data.inType,
                'plength':vm.$data.inLength,
                'pinfo':vm.$data.inInfo
            });
            //清空
            vm.$data.inName='';
            vm.$data.inType='';
            vm.$data.inLength='';
            vm.$data.inInfo='';
        },
        delOneInDate:function (index) {
            vm.$data.ApiInfo.in.splice(index,1);
        },
        addOneOutData:function () {
            //增加一个出参
            vm.$data.ApiInfo.out.push({
                'pname':vm.$data.outName,
                'ptype':vm.$data.outType,
                'plength':vm.$data.outLength,
                'pinfo':vm.$data.outInfo
            });
            //清空
            vm.$data.outName='';
            vm.$data.outType='';
            vm.$data.outLength='';
            vm.$data.outInfo='';
        },
        delOneOutDate:function (index) {
            vm.$data.ApiInfo.out.splice(index,1);
        },
        initApiInfo:function () {//初始化apiinfo数据
            vm.$data.ApiInfo = {
                'name':'',
                'url':'',
                'methodType':'',
                'in':[
                ],
                'out':[
                ],
                'info':''
            };
        },
        delApi:function (id) {
            if(confirm("是否删除此API")){
                axios.post(delApiUrl,{id:id,projectid:this.getQueryString("id")}).then(function (a) {
                    vm.getProjectApiPackage();
                    alert("删除成功");

                });
            }

        }
    },
    created:function () {
        this.getProjectApiPackage();
    }
});