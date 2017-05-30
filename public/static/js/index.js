var vm = new Vue({
    el:'#main',
    data :{
        password:'',
        adminPassword:'',
        adminProject:[],
        showProject:[],
    },
    methods:{
        login:function (event) {
            var aaa = axios.post(loginUrl,'password='+vm.$data.password).then(function (a) {
                if(a.data.success==1){
                    console.log(vm.$data.showProject);
                    vm.$data.showProject = a.data.showProjects;
                    vm.$data.adminProject = a.data.adminProjects;
                }
            });

        }
    }
})