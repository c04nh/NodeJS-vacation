let http = require('http');

let server = http.createServer();
let port = 3000;
server.listen(port, '10.96.120.27', 50000, function(){
    console.log('server stating.... %d', port);
})