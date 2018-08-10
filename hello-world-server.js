//create server using http inbuilt module
var http = require('http');
//create server with call back function. when ever request comes callback willl execute
var s = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hello owrld")
});

s.listen(1000);