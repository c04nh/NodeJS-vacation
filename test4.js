var path = require('path');

var directories = ['users', 'mirim', 'docs'];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);
var curPath = path.join('/Users/mirim', 'notepad.exe');
console.log('파일 패스 : %s', curPath);