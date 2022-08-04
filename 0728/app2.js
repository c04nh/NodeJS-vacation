let http = require('http'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static');

let app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    console.log('첫번째 미들웨어 요청함');
    let parId = req.body.id || req.query.id;
    let parPass = req.body.password || req.query.password;
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('Express 서버에서 응답한 결과입니다.');
    res.write('<p> 아이디 : ' + parId + ' </p>');
    res.write('<p> 비밀번호 : ' + parPass + ' </p>');
    res.end();
});
http.createServer(app).listen(app.get('port'), () => {
    console.log('server 3000번 포트 시작함.');
});