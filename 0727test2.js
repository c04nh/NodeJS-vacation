let http = require('http');

let server = http.createServer();
let port = 3000;
server.listen(port, function(){
    console.log('server stating.... %d', port);
});

server.on('connection', (socket) => {
    let addr = socket.address();
    console.log('클라이언트가 connection 되었습니다 : %s, %d', addr.addree, addr.port);
});

server.on('request', function(req, res){
    console.log('클라이언트의 request 이벤트가 발생했습니다');
    // res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // res.write('<!DOCTYPE html>');
    // res.write('<html>');
    // res.write('<head>');
    // res.write('<title> 응답 페이지 </title>');
    // res.write('</head>');
    // res.write('<body>');
    // res.write('<h1> 노드 제이에스로부터의 응답 메세지 </h1>');
    // res.write('<h2> 3415 조나현 </h2>');
    // res.write('<h3> 2022년 7월 27일 </h3>');
    // res.write('</body>');
    // res.write('</html>');
    res.end(html());
});

server.on('close', () => {
    console.log('server가 close 되었습니다.');
});

function html(){
    return `<!DOCTYPE html>
            <html>
                <head>
                    <title> 응답 페이지 </title>
                    <meta charset='utf-8'/>
                </head>
                <body>
                    <h1> 노드 제이에스로부터의 응답 메세지 </h1>
                    <h2> 3415 조나현 </h2>
                    <h3> 2022년 7월 27일 </h3>
                    <h4> 백틱 사용함 </h4>
                </body>
            </html>`;
}