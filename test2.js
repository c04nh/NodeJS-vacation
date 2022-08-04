let calc = require('./module1');
console.log('calc 모듈 호출 add %d', calc.add(2, 3));
console.log('calc 모듈 호출 sub %d', calc.sub(5, 3));
console.log('calc 모듈 호출 mul %d', calc.mul(5, 3));
console.log('calc 모듈 호출 mod %d', calc.mod(5, 3));

let ksk = require('./module2');
console.log('ksk 모듈 호출 add %d', ksk.add(2, 3));
console.log('ksk 모듈 호출 sub %d', ksk.sub(5, 3));
console.log('ksk 모듈 호출 mul %d', ksk.mul(5, 3));
console.log('ksk 모듈 호출 mod %d', ksk.mod(5, 3));