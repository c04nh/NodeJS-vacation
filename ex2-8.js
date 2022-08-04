let Users = [{name:'소녀시대', age:20},
{name:'JSM', age:37}];
Users.push({name:'HSY', age:28});

// let add = (a, b) => a + b;
// Users.push(add);

console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);
// console.log('add 함수 실행 %d', Users[3](10, 20));

for(let i = 0; i < Users.length; i++){
    console.log('배열 요소 #' + i + ":%s", Users[i].name);
}

Users.forEach(element => {
    console.log('배열요소 # %s' + element.name);
})

Users.splice(1, 0, {name:'CSJ', age:37});
console.log('splice()로 요소를 인덱스 1에 추가');
console.dir(Users);
Users.splice(2, 1);
console.dir(Users);