var vm = new Vue({
    el:'#main',
    data :{
        password:'12345'
    },
    methods:{
        login:function (event) {
            alert("this is ok!");
            axios.get('http://localhost:8888/index/Index/login')
                .then(function(response){
                    this.password = "123456789";
                    alert("this is ok!");
                    console.log(response);
                })
                .catch(function(err){
                    console.log(err);
                });
        }
    }
})