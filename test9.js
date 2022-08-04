let fs = require('fs');

fs.open('./output2.txt', 'w', function(err, fd){
    if(err) throw err;
    let buf = new Buffer('전성민!');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err) throw err;
        console.log(err, written, buffer);

        fs.close(fd, function(){
            console.log('닫기 완료');
        });
    });
});