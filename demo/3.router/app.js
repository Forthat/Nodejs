var http = require('http');
var url = require('url');
var route = require('./modules/route');
http.createServer(function(req,res){
    console.log(req)
    if(req.url!='./favicon.ico'){
        console.log(url.parse(req.url));
        var path = url.parse(req.url).path.slice(1);
        route[path](res);
        res.end('');
    };
}).listen(8080);
console.log('server is running');
