const readLine = require('readline');
const f = require('fs');
var file = './user.txt';
var rl = readLine.createInterface({
    input : f.createReadStream(file),
    output : process.stdout,
    terminal: false
});
rl.on('line', function (text) {
    const arr = text.split(' ');
    console.log(arr[0]);
});