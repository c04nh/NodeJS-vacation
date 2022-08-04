let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    bodyParser = require('body-parser');

let dummyDB = require('./dummyDB');

let app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/user', (req, res) => {
    res.send(dummyDB.get());
});

app.get('/user/:id', (req, res) => {
    res.send(dummyDB.get(req.params.id));
});

app.post('/user', (req, res) => {
    let inname = req.body.name;
    let inregion = req.body.region;
    if(inname && inregion){
        res.send(dummyDB.insert({
            name: inname,
            region: inregion
        }));
    }else{
        throw new Error('입력 error');
    }
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let region = req.body.region;
    let item = dummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;
    res.send(item);
});

app.delete('/user/:id', (req, res) => {
    res.send(dummyDB.remove(req.params.id));
});

http.createServer(app).listen(3000, () => {
    console.log('server 3000 port starting');
});


