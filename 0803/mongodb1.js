let mongoose = require('mongoose');
let mongodb = require('mongodb');

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

    let newUser1 = new UserModel({id: 'user3', name: 'Black Pink', password: '1234'});

    // newUser1.save((err, data) => {
    //     if(err) console.log(err);
    //     else console.log('save');
    // });

    UserModel.find((err, results) => {
        if(err) console.log('err');
        console.log('results');
        console.dir(results);
    });
}

connectDB();