let express = require('express');
let http = require('http');
const { Http2ServerResponse } = require('http2');

let app = express();

app.use((req, res, next) => {
    console.log('첫번째 미들웨어 실행함');
    let userAgent = req.header('User-Agent');
    let paramName = req.query.name;
    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1> Express 서버에 응답한 결과입니다. </h1>');
    res.write('<p> User-Agent : ' + userAgent + ' </p>');
    res.write('<p> name : ' + paramName + ' </p>');
});

http.createServer(app).listen(3000, function(){
    console.log('익스프레스 서버를 시작합니다.');
});