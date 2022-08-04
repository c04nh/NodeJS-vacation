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
app.all('*', (req, res) => {
    res.status(404).send('<h1> 404 에러 - 페이지를 찾을 수 </h1>');
});
let errorHandler = expressErrorHandler({
    static: {404: '/public/404.html'}
});

app.use(errorHandler);
http.createServer(app).listen(app.get('port'), () => {
    console.log('server 3000번 포트 시작함.');
});