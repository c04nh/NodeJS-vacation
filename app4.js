let bodyParser = require('body-parser');
let express = require('express');
let http = require('http');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function(req, res, next){
    console.log('첫번째 미들웨어 실행함');
    let paramId = req.body.id || req.query.id;
    let paramPw = req.body.password || req.query.password;
    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1> Express 서버에 응답한 결과입니다. </h1>');
    res.write('<p> id : ' + paramId + ' </p>');
    res.write('<p> pw : ' + paramPw + ' </p>');
    res.end();
});

http.createServer(app).listen(3000, function(){
    console.log('익스프레스 서버를 시작합니다.');
});