let mysql = require('mysql');

let dbconn = mysql.createConnection({
    user: 'root',
    password: 'mirim',
    database: 'School'
});

dbconn.query('select * from students', function(err, result, field){
    if(err){
        console.log('query error');
    }else{
        console.log(result);
    }
});