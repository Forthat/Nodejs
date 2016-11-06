/*
    nodejs中使用函数
    1. 在当前页面 直接书写函数 直接调用
    2. 模块化调用一个函数
        fn1.js
        function output (){}
        module.exports.output = output;

    3. 模块化调用多个函数
        fn2.js
        function fn1(){}
        function fn2(){}
        module.exports={
            fn1:fn1,
            fn2:fn2
        }
*/
var http = require('http');
var fn = require('./module/fn1.js');
var fns = require('./module/fn2.js')
http.createServer(function(req,res){
    if(req.url=='/favicon.ico'){return};
    res.writeHead(200,{'Content-Type':'text/html,charset=utf-8'});
    output(res);
    // fn.output(res);
    fns.fn1();
    fns.fn2();
    res.end();
}).listen(8080);
console.log('请访问127.0.0.1:8080');

function output(res){
    console.log('输出内容');
}
