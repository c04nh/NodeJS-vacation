let express = require('express');
let http = require('http');
const { Http2ServerResponse } = require('http2');

let app = express();

app.set('port', 3000 || process.env.PORT);

http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작합니다.' + app.get('port'));
})