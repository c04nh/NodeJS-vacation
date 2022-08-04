var http = require('http');
var fs = require('fs');

let server = http.createServer();
let port = 3000;
server.listen(port, function(){
    console.log('server stating.... %d', port);
});

server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');

    var filename = 'dog.jpg';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type":"image/jpg"});
        res.write(data);
        res.end();
    })
});