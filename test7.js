let fs = require('fs');
fs.readFile('./mirim.txt', 'utf-8', function(err, data){
    console.log(data);
});