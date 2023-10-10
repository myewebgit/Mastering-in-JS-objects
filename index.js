

1. // create objects using object literals:
const player ={};
player.name = 'Small nirob'; //property
player.speciality = 'batman';//property
player.bat =function (){
    // console.log('swing your bat')          // method
}

// console.log(player);
// player.bat()

const student ={
    name:'pandey',
    job:'khai andey',
    ball: function (){
        console.log('throw the ball')
    },
    salary: 100000
}

// console.log(student)

// 2. object constructor:
const person = new Object();
// console.log(person)

// 3. Object create method:
const item = Object.create(null);
// console.log(item)
const atel = Object.create(student)
// console.log(atel.name)
// console.log(atel.friend)

// 4.class

class Person{
    name= 'abul';
    address= 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
// console.log(person1)

// 5. Function 
function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon',32);
console.log(tesla)