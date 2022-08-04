let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');

let app = express();
app.use((req, res, next) => {
    fs.readFile('html2.ejs', 'utf8', (err, data) => {
        res.send(ejs.render(data, {result: [{
            hb:'3415',
            name:'Mirim',
            mobile:'010-2657-7498',
            addr:'seoul',
            description:'ejs를 html로 변경합니다'
        },
        {
            hb:'3415',
            name:'Mirim',
            mobile:'010-2657-7498',
            addr:'seoul',
            description:'ejs를 html로 변경합니다'
        }]
        }));
    });
});
http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
});