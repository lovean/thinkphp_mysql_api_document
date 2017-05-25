var vm = new Vue({
    el:'#main',
    data :{
        password:'12345',
        projectList:[
        ],
    },
    methods:{
        login:function (event) {
            axios.post(loginUrl,{password:this.password})
                .then(function(response){
                    vm.$data.projectList = [
                        {'id':1,'name':'停车场项目'},
                        {'id':2,'name':'聊天室项目'}
                    ];
                })
                .catch(function(err){

                });
        }
    }
})