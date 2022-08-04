let http = require('http'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static'),
    expressErrorHandler = require('express-error-handler');

let app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(static(path.join(__dirname, 'public')));

let errorHandler = expressErrorHandler({
    static: {404: '/public/404.html'}
});

app.use(errorHandler);
http.createServer(app).listen(app.get('port'), () => {
    console.log('server 3000번 포트 시작함.');
});

app.all('/process/save', function(req, res){
    console.log('/process/save 호출됨');
    let auth = req.body.auth || req.query.auth;
    let date = req.body.date || req.query.date;
    let content = req.body.content || req.query.content;
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('메모가 저장되었습니다.');
    res.write('<p> 작성자 : ' + auth + ' </p>');
    res.write('<p> 작성일시 : ' + date + ' </p>');
    res.write('<p> 내용 : ' + content + ' </p>');
    res.write('<button onClick="location.href=\'memo.html\'">다시 작성</button>');
    res.end();

    console.log('작성자 : ' + auth);
    console.log('작성일시 : ' + date);
    console.log('내용 : ' + content);
})