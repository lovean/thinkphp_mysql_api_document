var vm = new Vue({
    el:'#main',
    data :{
        password:'12345'
    },
    methods:{
        login:function (event) {
            axios.post(loginUrl,{password:this.password})
                .then(function(response){
                    
                })
                .catch(function(err){

                });
        }
    }
})