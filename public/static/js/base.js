var baseUrl = "http://localhost:8081";
var loginUrl = baseUrl+"/index/Index/login";
var getProjectUrl = baseUrl+"/index/Project/getProject";
var getApiUrl = baseUrl+"/index/Project/getApi";
var addPackageUrl = baseUrl+"/index/Project/addPackage";
var addApiUrl = baseUrl+"/index/Project/addApi";
var delApiUrl = baseUrl+"/index/Project/delApi";
axios.defaults.withCredentials = true;