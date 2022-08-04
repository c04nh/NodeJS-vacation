let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    mysql = require('mysql');

let dbconn = mysql.createConnection({
    user: 'root',
    password: 'mirim',
    database: 'companydb'
});

dbconn.query('select * from productstb1 where id = ?', '3', (err, results, fields) => {
    if(err){
        console.log('query문에 오류 발생' + err);
    }else{
        console.log('query 결과');
        console.dir(results);
    }
})

let app = express();
app.use((req, res, next) => {
    fs.readFile('html.ejs', 'utf8', (err, data) => {
        res.send(ejs.render(data));
    });
});
http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
});