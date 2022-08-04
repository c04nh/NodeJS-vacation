let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    mysql = require('mysql'),
    bodyParser = require('body-parser');

let dbconn = mysql.createConnection({
    user: 'root',
    password: 'mirim',
    database: 'companydb'
});



dbconn.query('select * from productstb1;', (err, results, fields) => {
    if(err){
        console.log('query문에 오류 발생' + err);
    }else{
        console.log('query 결과');
        console.dir(results);
    }
})

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    fs.readFile('list.ejs', 'utf8', (err, data) => {
        dbconn.query('select * from productstb1', (err, results) => {
            if(err){
                console.log('db error', err);
            }else{
                res.send(ejs.render(data, {data: results}));
            }
        });
    });
});

app.get('/delete/:id', (req, res) => {
    var id = req.params.id;
    dbconn.query('delete from productstb1 where id=?', id, (err, results) => {
        if(err){
            console.log('db error', err);
        }else{
            console.log('삭제 완료');
            res.redirect('/');
        }
    });
});

app.get('/insert', (req, res) => {
    fs.readFile('insert.ejs', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/insert', (req, res) => {
    let body = req.body;
    dbconn.query('insert into productstb1 (name, modelnumber, series) values(?, ?, ?)',
        [body.name, body.modelnumber, body.series], () => {
            console.log(`data insert ok... ${body.name}`);
            res.redirect('/');
        }
    );
});

app.get('/edit/:id', (req, res) => {
    fs.readFile('edit.ejs', 'utf8', (err, data) => {
        dbconn.query('select * from productstb1 where id = ?', [req.params.id],
        (err, result) => {
            console.log('update ok...');
            res.send(ejs.render(data, {data:result[0]}));
        });
    });
})

app.post('/edit/:id', (req, res) => {
    dbconn.query('update productstb1 set name =?, modelnumber =?, series =? where id =?',
    [req.body.name, req.body.modelnumber, req.body.series, req.params.id],
    () => {
        console.log('ok... %d', req.params.id);
        res.redirect('/');
    });
});

http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
});