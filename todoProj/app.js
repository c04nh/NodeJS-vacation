let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    mysql = require('mysql'),
    bodyParser = require('body-parser');

let dbconn = mysql.createConnection({
    user: 'root',
    password: 'mirim',
    database: 'halildb'
});

let app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    fs.readFile('list.ejs', 'utf8', (err, data) => {
        dbconn.query('select * from todotb1', (err, results) => {
            if(err){
                console.log('db error', err);
            }else{
                res.send(ejs.render(data, {data: results}));
            }
        });
    });
});

app.get('/insert', (req, res) => {
    fs.readFile('insert.ejs', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/insert', (req, res) => {
    let body = req.body;
    dbconn.query('insert into todotb1 (contents, yesno) values(?, ?)',
        [body.contents, body.yesno], () => {
            console.log(`data insert ok... ${body.contents}`);
            res.redirect('/');
        }
    );
});

// app.get('/edit/:id', (req, res) => {
//     fs.readFile('edit.ejs', 'utf8', (err, data) => {
//         dbconn.query('select * from todotb1 where id = ?', [req.params.id], (err, result) => {
//             res.send(ejs.render(data, {data:result[0]}));
//         })
//     });
// });

// app.post('/edit/:id', (req, res) => {
//     dbconn.query('update todotb1 set contents = ?, yesno = ? where id = ?',
//     [req.body.contents, req.body.yesno, req.params.id],
//     () => {
//         console.log('ok... %d', req.params.id);
//         res.redirect('/');
//     });
// });

app.get('/edit/:id', (req, res) => {
    dbconn.query('select yesno from todotb1 where id = ?', [req.params.id], (err, result) => {
        var yesno = result[0].yesno;
        dbconn.query('update todotb1 set yesno = ? where id = ?',
        [!yesno, req.params.id],
        () => {
            console.log('ok... %d', req.params.id);
            res.redirect('/');
        });
    })
})

app.get('/delete/:id', (req, res) => {
    var id = req.params.id;
    dbconn.query('delete from todotb1 where id=?', id, (err, results) => {
        if(err){
            console.log('db error', err);
        }else{
            console.log('삭제 완료');
            res.redirect('/');
        }
    });
});

http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
});