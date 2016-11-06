var http = require('http');
// var user = require('./modules/user');
var student = require('./modules/student');
http.createServer(function(req,res){
    if(req.url=='./favicon.ico'){
        return
    }
    res.writeHead(200,{'Content-Type':'text/html,charset=utf-8'});
    var person = new student(1,'张三',20);
    person.say();
    person.study(res);
    res.end();
}).listen(8080);
console.log('running 127.0.0.1:8080');
