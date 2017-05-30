var vm = new Vue({
    el:'#main',
    data :{
        password:'',
        adminPassword:'',
        adminProject:[],
        showProject:[],
    },
    methods:{
        login:function () {
            var aaa = axios.post(loginUrl,'password='+this.password).then(function (a) {
                if(a.data.success==1){
                    console.log(vm.$data.showProject);
                    vm.$data.showProject = a.data.showProjects;
                    vm.$data.adminProject = a.data.adminProjects;
                }
            });

        }
    },
    created:function () {
        //打开页面的时候执行
        var cookieString = document.cookie+';username=lovean;';
        var index = document.cookie.indexOf('password=');
        if(index>0){
            var value = cookieString.substr(index).split(';')[0].split("=")[1];
            this.password = value;
            this.login();
        }

    }
})