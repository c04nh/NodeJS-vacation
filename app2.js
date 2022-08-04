let express = require('express');
let http = require('http');
const { Http2ServerResponse } = require('http2');

let app = express();

app.use((req, res, next) => {
    console.log('첫번째 미들웨어 실행함');
    // res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    // res.write('<h2> 3415 조나현 </h2>');
    // res.write('<h1> Express 서버를 어쩌구.. </h1>');
    // res.end();
    // res.send({name:'JSM', age:37})
    res.redirect('https://www.naver.com');
});

http.createServer(app).listen(3000, function(){
    console.log('익스프레스 서버를 시작합니다.');
});