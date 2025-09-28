/*                      36-8 Module summary and checklist */

/* 
* Ways to create Object
* Ways to clone Object
* Obj. method property
* Delete object property
* Object Immutability
____________________________________________________________________________________________
____________________________________________________________________________________________
________________________
* Ways to create object
________________________

1. Object literal syntax:

const person = {
firstName: "John", 
lastName: "Doe"
}


2. Object constructor:

const person1 = new Object();
//Adding the properties on person1 object
person1.firstName = "John";
person1.lastName = "doe";


3. Constructor Function:

function Person(firstName, lastName){
    this.firstName = firstName:
    this.lastName lastName;
}
const person1 = new Person('John', 'Doe');
const person2 = new Person(' Jane', 'Doe');


4. Es6 classes:

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName:
        this.lastName = lastName;
    }
}
const person1 = new Person('John', 'Doe');
const person2 = new Person(' Jane', 'Doe');


5. Object.create():

const person1 = {
        name: "John Doe"
}
const person2 = Object.create(person1);
console.log(person2); // { name: 'John Doe!)}

// ======================================================================================= //

_______________________
* Ways to clone Object
_______________________

In Code:

const data = {name: "Alice", age: 23}
const dataCopy = data

Under the Hood:

{name: "Alice", age: 23}
        ^   ^
      data dataCopy

1. Use the spread operator (Shallow Copy):

In Code:

const data = {name: "Alice", age: 23}
const dataCopy = {...data}

Under the Hood:
{name: "Alice", age: 23}      {name: "Alice", age: 23}
          ^                             ^
        data                         dataCopy


2. Use JSON parsing (Deep Copy):

const data = { name: "Alice", age: 26}
const dataCopy = JSON.parse(JSON.stringify(data))
data.age = 1000
console.log(data)
console.log(dataCopy)


{
    age: 1000,
    name: "Alice"
}

{
    age: 26,
    name: "Alice"
}

// ======================================================================================= //
________________________________
* Object method property review
________________________________


1 var person1 ={                 // console.log(person1);
2   name: 'Jim',                     // {name: "Jim", DOB: 1997, age: function}
3   DOB: 1997,
4   age: function(){                //console.log("Hello, I'm" + person1.name + "and I'm" + 
5       return 2020 - this. DOB;                              person1.age() + "years old.");
6   }                                       // Hello, I'm Jim and I'm 23 years old.
7 }


VARIABLE: person1 (object)
PROPERTIES: lines 2-3
METHOD: age
KEYS: name, DOB, age
VALUE: Jim, 1997, function

Each property and method is separated with a comma, except for after the last value.

// ====================================================================================== //
__________________________________________
* 2 ways to delete/ remove object property
__________________________________________

> var person = {
        name: "John Doe",              // 1) delete object.property;
        prefix: "Mr",                  // 2) const {property, ...rest} = object;
        age: 30
  }
< undefined
> delete person.age;
< true
> console.log(person)
   {name: 'John Doe', prefix: 'Mr'}
< undefined

// ======================================================================================= //
_________________________________
* JavaScript Object Immutability
_________________________________


const frozen = Object.freeze({ 
    answer: 42
});
frozen.newAnswer = 43;
// { answer: 42 }
frozen.answer = 44; 
// { answer: 42 }
delete frozen.answer;
// { answer: 42 }



const sealed = Object.seal({
    answer: 42
});
sealed.newAnswer = 43;
// { answer: 44 }
sealed.answer = 44;
// { answer: 44}
delete sealed.answer;
// { answer: 44 }




               READ          CREATE         UPDATE          DELETE
freeze() --->   yes            no             no              no
seal()  --->    yes            no             yes             no                  

*/



