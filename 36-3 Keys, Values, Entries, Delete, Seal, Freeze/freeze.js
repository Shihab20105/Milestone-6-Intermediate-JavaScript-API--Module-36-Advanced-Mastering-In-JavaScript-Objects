/*                      36-3 Keys, values, entries, delete, seal, freeze */

/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);

// Output: [ 'color', 'price', 'isCleaned', 'capacity' ]
*/



/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
console.log(values);

// Output: [ 'yellow', 50, true, 1 ]
*/




/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
console.log(pair);

[
  [ 'color', 'yellow' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]
]
*/





/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
delete bottle.isCleaned

// Output: { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
*/





/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
delete bottle.isCleaned
console.log(bottle);

Output:
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
{ color: 'yellow', price: 50, capacity: 1 }
*/






/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);

Output:
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
*/





/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
Object.seal(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
console.log(bottle);

Output: 
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
{ color: 'yellow', price: 1000, isCleaned: true, capacity: 1 }
*/






/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
Object.seal(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

Output: 
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
{ color: 'yellow', price: 1000, isCleaned: true, capacity: 1 }
*/






/*
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
// Object.seal(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

Output:
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
{ color: 'yellow', price: 1000, capacity: 1, height: 12 }
*/






const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [[ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]];
console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

/* 
Output:
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
{ color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
*/




/*
__________________________________________________________________________________________

// An array inside an array, it’s usually called a two-dimensional array (2D array).

// This is a two-dimensional array (array of arrays).
[
  [ 'color', 'yellow' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]
]
*/