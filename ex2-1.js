function first(){
    second();
    console.log('첫 번째 안녕하세요');
}

function second(){
    third();
    console.log("두 번째 안녕하세요");
}

function third(){
    console.log('세 번째 안녕하세요');
}

first();