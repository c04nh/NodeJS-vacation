let fs = require('fs'),
    ejs = require('ejs'),
    mysql = require('mysql');

let dbconn = mysql.createConnection({
    user: 'root',
    password: 'mirim',
    database: 'halildb'
});

let todo = {};

todo.get = (req, res) => {
    fs.readFile('./views/list.ejs', 'utf8', (err, data) => {
        dbconn.query('select * from todotb1', (err, results) => {
            if(err){
                console.log('db error', err);
            }else{
                res.send(ejs.render(data, {data: results}));
            }
        });
    });
};

todo.getInsert = (req, res) => {
    fs.readFile('./views/insert.ejs', 'utf8', (err, data) => {
        res.send(data);
    });
};

todo.getDelete = (req, res) => {
    var id = req.params.id;
    dbconn.query('delete from todotb1 where id=?', id, (err, results) => {
        if(err){
            console.log('db error', err);
        }else{
            console.log('삭제 완료');
            res.redirect('/');
        }
    });
};

todo.postInsert = (req, res) => {
    let body = req.body;
    dbconn.query('insert into todotb1 (contents, yesno) values(?, ?)',
        [body.contents, body.yesno], () => {
            console.log(`data insert ok... ${body.contents}`);
            res.redirect('/');
        }
    );
};

todo.getEdit = (req, res) => {
    dbconn.query('select yesno from todotb1 where id = ?', [req.params.id], (err, result) => {
        var yesno = result[0].yesno;
        dbconn.query('update todotb1 set yesno = ? where id = ?',
        [!yesno, req.params.id],
        () => {
            console.log('ok... %d', req.params.id);
            res.redirect('/');
        });
    });
};

module.exports = todo;