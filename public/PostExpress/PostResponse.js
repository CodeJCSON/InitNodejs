var express = require('express');
var app = express();

//成功使用post接收前端请求，并路由到其他模块
var postModule = require('./PostModule01');
app.post('/getMore', postModule.postModule01);

var server = app.listen(8000, function () {

    console.log("8000服务器启动");
});