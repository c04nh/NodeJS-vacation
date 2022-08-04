let fs = require('fs');

let infile = fs.createReadStream('./mirim.txt', {flags:'r'});
let outfile = fs.createReadStream('./output3.txt', {flags:'w'});

infile.on('data', function(data){
    console.log('읽어드린 데이터', data);
    outfile.write(data);
});

infile.on('end', function(){
    console.log('파일 읽기 종료');
    outfile.end(function(){
        console.log('종료');
    });
});