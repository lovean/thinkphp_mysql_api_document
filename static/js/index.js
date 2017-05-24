var vm = new Vue({
    el:'#main',
    data :{
        password:'12345'
    },
    methods:{
        login:function (event) {
            axios.get('http://localhost/phpmyadmin/').then(function (response) {
                console.log(response);
            })
        }
    }
})