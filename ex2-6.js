let Person = {
    age : 20,
    name : '뿌웅',
    add : function(a, b){
        return a + b
    }
};
console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('더하기 : %d', Person.add(10, 20));

let Student = {
    hb : 3415,
    name : '조나현',
    ban : 4,
    mobile : '010-2657-7498',
    add : function(a, b){
        return a + b
    }
};

console.log('학번 : %d', Student.hb);
console.log('이름 : %s', Student.name);
console.log('반 : %d', Student.ban);
console.log('전화번호 : %s', Student.mobile);
console.log('더하기 : %d', Student.add(10, 20));