let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');

let app = express();
app.use((req, res, next) => {
    fs.readFile('html.ejs', 'utf8', (err, data) => {
        res.send(ejs.render(data));
    });
});
http.createServer(app).listen(3000, () => {
    console.log('Express sercer 3000 포트에서 시작됨');
});