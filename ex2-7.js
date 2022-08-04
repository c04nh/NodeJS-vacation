function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

console.log(add1(10, 20));
console.log(add2(10, 20));
console.log(add3(10, 20));
console.log(add4(10, 20));

function not1(x){
    return !x;
}

const not2 = x => !x;

console.log(not1(true));
console.log(not2(true));