let result = 0;

console.time('총 실행시간');
for(let i = 0; i <= 9999; i++){
    result += i;
}

console.timeEnd('총 실행시간');
console.log('1부터 9999까지의 합 %d', result);
console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 디렉토리 이름 : %s', __dirname);
console.log('argv 속성의 파라미터 개수 : ' + process.argv.length);
console.dir(process.argv);
process.argv.forEach((element, index) => {
    console.log(index + ': ' + element);
});