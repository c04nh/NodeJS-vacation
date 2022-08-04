let express = require('express'),
    http = require('http'),
    todo = require('./routes/todoroute'),
    bodyParser = require('body-parser');
    
let app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', todo.get);

app.get('/delete/:id', (req, res) => {
    res.send(todo.getDelete());
});

app.get('/insert', todo.getInsert);

app.post('/insert', todo.postInsert);

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

app.get('/edit/:id', todo.getEdit);


http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
});