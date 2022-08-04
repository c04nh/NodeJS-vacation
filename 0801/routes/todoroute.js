let todo = {};

let fs = require('fs'),
    ejs = require('ejs'),
    mysql = require('mysql');

let dbconn = mysql.createConnection({
    user: 'root',
    password: 'mirim',
    database: 'companydb'
});

todo.get = (req, res) => {
    fs.readFile('./views/list.html', 'utf8', (err, data) => {
        dbconn.query('select * from productstb1', (err, results) => {
            if(err){
                console.log('db error', err);
            }else{
                res.send(ejs.render(data, {data:results}));
            }
        });
    });
}

todo.getDelete = (req, res) => {
    var id = req.params.id;
    dbconn.query('delete from productstb1 where id=?', id, (err, results) => {
        if(err){
            console.log('db error', err);
        }else{
            console.log('삭제 완료');
            res.redirect('/');
        }
    });
}

todo.getInsert = (req, res) => {
    fs.readFile('./views/insert.ejs', 'utf8', (err, data) => {
        res.send(data);
    });
}

todo.postInsert = (req, res) => {
    let body = req.body;
    dbconn.query('insert into productstb1 (name, modelnumber, series) values(?, ?, ?)',
        [body.name, body.modelnumber, body.series], () => {
            console.log(`data insert ok... ${body.name}`);
            res.redirect('/');
        }
    );
}

todo.getEdit = (req, res) => {
    fs.readFile('./views/edit.ejs', 'utf8', (err, data) => {
        dbconn.query('select * from productstb1 where id = ?', [req.params.id],
        (err, result) => {
            console.log('update ok...');
            res.send(ejs.render(data, {data:result[0]}));
        });
    });
}
todo.postEdit = (req, res) => {
    dbconn.query('update productstb1 set name =?, modelnumber =?, series =? where id =?',
    [req.body.name, req.body.modelnumber, req.body.series, req.params.id],
    () => {
        console.log('ok... %d', req.params.id);
        res.redirect('/');
    });
}

module.exports = todo;


