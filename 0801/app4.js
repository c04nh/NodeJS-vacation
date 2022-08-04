let express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser');

let todo = require('./routes/todoroute');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', todo.get);

app.get('/delete/:id', todo.getDelete);

app.get('/insert', todo.getInsert);

app.post('/insert', todo.postInsert);

app.get('/edit/:id', todo.getEdit);

app.post('/edit/:id', todo.postEdit);

http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
});