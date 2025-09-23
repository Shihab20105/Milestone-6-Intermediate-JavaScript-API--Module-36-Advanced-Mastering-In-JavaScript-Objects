/*                      36-1 Module introduction Different way to Create Object */

// Object has two things one is Properties and another one is Methods
    // * Properties (for data)
    // * Methods (for behavior)

// 1.  Create object using object literals
//------------------------------------------
/*
const player = {};
player.name = 'Tamim Iqbal';
player.specialty = 'Batsman';
console.log(player);
 
//Output: { name: 'Tamim Iqbal', specialty: 'Batsman' }
*/




/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
console.log(player);
player.bat();

/* 
Output:
{
  name: 'Tamim Iqbal',
  specialty: 'Batsman',
  bat: [Function (anonymous)]
}
Swing your bat
*/




/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
console.log(person);

// Output: {}
*/





/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
// console.log(person);

// 3. Object Create Method
const item = Object.create(null);
console.log(item);

// Output: [Object: null prototype] {}
*/






/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
// console.log(person);

// 3. Object Create Method
// const item = Object.create(null);
const martin = Object.create(student);
console.log(martin);

// Output: {}
*/






/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
// console.log(person);

// 3. Object Create Method
// const item = Object.create(null);
const martin = Object.create(student);
console.log(martin.name);

// Output: Khan
*/





/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
// console.log(person);

// 3. Object Create Method
// const item = Object.create(null);
const martin = Object.create(student);
console.log(martin.friend);

// Output: undefined
*/




/*
const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
// console.log(person);

// 3. Object Create Method
// const item = Object.create(null);
const martin = Object.create(student);
// console.log(martin.friend);


// 4. Class
//--------------
class Person{
    name = 'Mahmudullah';
    address = 'Khulna';
    constructor(age){
        this.age = age;
    } 
}

const person1 = new Person(40);
console.log(person1);

// Output: Person { name: 'Mahmudullah', address: 'Khulna', age: 40 }
*/






const player = {};
player.name = 'Tamim Iqbal'; // Object Properties
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing your bat'); // Object method
}
// console.log(player);
// player.bat();

const student = {
    name: 'Khan',
    job: 'Play Cricket',
    ball: function(){
        console.log('Throw the ball');
    },
    salary: 10000
    }

// 2. Object Constructor
const person = new Object();
// console.log(person);

// 3. Object Create Method
// const item = Object.create(null);
const martin = Object.create(student);
// console.log(martin.friend);


// 4. Class
class Person{
    name = 'Mahmudullah';
    address = 'Khulna';
    constructor(age){
        this.age = age;
    } 
}

const person1 = new Person(40);
console.log(person1);

// 5. Function
function Car(model, price){
    this.model = model;
    this.price = price;

}

const tesla = new Car('elon', 32);


// ====================================================================================== //

/* 
// Ways to create Object
_______________________

1. Object literal syntax: 

const person = {
    firstName: "John",
    lastName: "Doe"
};


2. Object constructor:

const person1 = new Object();

//Adding the properties on person1 object

person1.firstName "John":
person1.lastName = "doe";


3. Constructor Function:

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person('John', 'Doe');
const person2 = new Person(' Jane', 'Doe');



4. Es6 classes:

class Person {
    constructor (firstName, lastName){
        this.firstName= firstName;
        this.lastName = lastName:
    }  
}

const person1 = new Person("John', 'Doe');
const person2 = new Person(' Jane', 'Doe'):


5. Object.create() :
const person1 = {
    name: "John Doe"

const person2 = Object.create(person1):
console.log(person2): // ( name: 'John Doe )

*/