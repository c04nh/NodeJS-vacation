let fs = require('fs');

fs.writeFile('./output.txt', '전성민........', function(err){
    if(err){
        console.log('에러..');
    }
    console.log('output 파일 쓰기 완료');
});