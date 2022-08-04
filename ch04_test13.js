var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    var instream = fs.createReadStream('./mirim.txt');
    instream.pipe(res);
});

server.listen(3000, '127.0.0.1', function(){
    console.log('server start....');
});