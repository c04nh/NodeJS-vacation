function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다. ');
}

let person1 = new Person('JSM', 37);
let person2 = new Person('HSY', 28);
let person3 = new Person('CSJ', 37);
console.dir(person1);
console.dir(person2);
console.dir(person3);
console.log(person1.name);
person1.walk(4)

function Student(hb, name, ban){
    this.hb = hb;
    this.name = name;
    this.ban = ban;
}

Student.prototype.study = function(time){
    console.log(time + '시간을 공부합니다.');
}

let student1 = new Student(3415, '조나현', 4);
let student2 = new Student(3408, '송은원', 4);
let student3 = new Student(3317, '조윤아', 3);
let student4 = new Student(3417, '최지우', 4);
console.dir(student1);
console.dir(student2);
console.dir(student3);
console.dir(student4);
console.log(student4.name);
student4.study(0)