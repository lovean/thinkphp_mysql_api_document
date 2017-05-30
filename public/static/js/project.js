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

            axios.post(getProjectUrl,{id:this.getQueryString("id"),projectid:this.getQueryString("id")}).then(function (a) {
                vm.$data.ApiPackage  = a.data;
            });
        },
        getApi:function (id) {
            axios.post(getApiUrl,{id:id,projectid:this.getQueryString("id")}).then(function (a) {
                vm.$data.ApiInfo = a.data;
            });
        }
    },
    created:function () {
        this.getProjectApiPackage();
    }
});