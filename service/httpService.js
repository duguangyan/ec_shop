var http = require('http');
var qs   = require('querystring');
var host = '120.77.209.176';
var port = 38000;
// 封装请求方法
var service = function(type,url,data,callblack) {
    /*
        type: get or post
        url : 请求地址
        data: 请求参数
        callblack:返回方法
     */
    var content= qs.stringify(data);
    var options = {
        host: host,
        port: port,
        path: url,
        method: type,
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Content-Length':content.length
        }
    };
    /*console.log("post options:\n",options);
    console.log("content:",content);
    console.log("\n");*/
    var _data='';
    var request = http.request(options, function(res) {
        /*console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);*/
        res.on('data', function(chunk){
            _data += chunk;
        });
        res.on('end', function(){
            console.log("\n--->>\nresult:", _data);
            callblack(JSON.parse(_data));
        });
    });
    request.write(content);
    request.end();
}
var httpService = {
    get:function(url,data,callblack){
        service('get',url,data,callblack);
    },
    post:function(url,data,callblack){
        service('post',url,data,callblack);
    }

}


module.exports = httpService;