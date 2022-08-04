let http = require('http'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static');

let app = express();
let router = express.Router();

router.route('/process/login')
    .post((req, res) => {
        console.log('/process/login 처리 중');
        let parId = req.body.id || req.query.id;
        let parPass = req.body.password || req.query.password;
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('Express 서버에서 응답한 결과입니다.');
        res.write('<p> 아이디 : ' + parId + ' </p>');
        res.write('<p> 비밀번호 : ' + parPass + ' </p>');
        res.end();
    });

app.use('/', router);
app.all('*', (req, res) => {
    res.status(404).send('404 에러 - 페이지를 찾을 수');
})

http.createServer(app).listen(app.get('port'), () => {
    console.log('server 3000번 포트 시작함.');
});