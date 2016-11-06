/*
    # 创建http服务器
    1.加载node内置模块http
    2.创建http服务、监听8080端口
        2.1 请求地址为/favicon 直接退出,解决因favicon引起的二次访问问题
        2.2 响应输出请求头信息
        2.3 响应输出内容 hello world
        2.4 响应结束
    3.访问当前js文件后控制台输出一些信息
*/
var http = require('http');
http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){return}//清除2次访问
    res.writeHead(200,{"Content-Type":'text/html,charset=utf-8'});
    res.write("hello world!");
    console.log('访问');
    res.end('你好，世界');
}).listen(8080);
console.log("请访问localhost:8080|127.0.0.1:8080");
