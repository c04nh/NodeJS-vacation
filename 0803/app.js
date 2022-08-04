let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({extended:false}));

let database;
let UserSchema;
let UserModel;

function connectDB(){
    let dburl = 'mongodb://127.0.0.1:27017/localdb';
    console.log('db 연결 주소' + dburl);
    mongoose.connect(dburl);
    database = mongoose.connection;
    database.on('open', () => {
        console.log('db open' + dburl);
    });
    UserSchema = mongoose.Schema({
        id: {type: String, required: true, unique: true},
        name: String,
        password: {type: String, required: true}
    });
    UserModel = mongoose.model('users', UserSchema);
    console.log('UserModel 정의함');
}

app.get('/', (req, res) => {
    fs.readFile('list.ejs', 'utf8', (err, data) => {
        if(err) console.log(err);
        UserModel.find((err, result) => {
            if(err) console.log('err' + err);
            console.log('results');
            console.dir(result);
            res.send(ejs.render(data, {data: result}));
        });
    });
});

app.get('/insert', (req, res) => {
    fs.readFile('insert.ejs', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/insert', (req, res) => {
    let newUser = new UserModel({id: req.body.id, name: req.body.name, password: req.body.password});

    newUser.save((err, data) => {
        if(err) console.log(err);
        else console.log('save');
        res.redirect('/');
    });
});

app.get('/delete/:id', (req, res) => {
    console.log('delete');
    UserModel.remove({id: req.params.id}, (err, data) => {
        if(err) console.log(err);
        res.redirect('/');
    });
    
});

app.get('/edit/:id', (req, res) => {
    fs.readFile('edit.ejs', 'utf8', (err, data) => {
        UserModel.find({id: req.params.id}, (err, result) => {
            if(err) console.log('err' + err);
            console.log('results');
            console.dir(result);
            res.send(ejs.render(data, {data:result[0]}));
        });
    });
});

app.post('/edit/:id', (req, res) => {
    console.log('edit');
    UserModel.update({id: req.params.id}, {$set:{id: req.body.id, name: req.body.name, password :req.body.password}}, (err, data) => {
        if(err) console.log(err);
        res.redirect('/');
    });
});

http.createServer(app).listen(3000, () => {
    console.log('Express server 3000 포트에서 시작됨');
    connectDB();
});