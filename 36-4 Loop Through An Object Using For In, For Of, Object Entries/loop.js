/*                      36-4 Loop through an object using for in, for of, object entries */

/*
const numbers = [12, 54, 65, 3, 54];
for(const number of numbers){
    console.log(number);
}

/* 
Output:
12
54
65
3
54
*/




/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
for(key of bottle){
    console.log(key);
}


Output:
For Of, Object Entries\loop.js:27
for(key of bottle){
           ^

TypeError: bottle is not iterable
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-36 (Advanced) Mastering In JavaScript Objects\36-4 Loop Through An Object Using For In, For Of, Object Entries\loop.js:27:12)
*/





/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};

const keys = Object.keys(bottle);
console.log(keys);

// Output: [ 'color', 'price', 'isCleaned', 'capacity' ]
*/





/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
for(const key of keys){
    console.log(key);
}
 
Output: 
color
price
isCleaned
capacity
*/






/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);

// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    console.log(bottle[key]);
}


Output:
yellow
50
true
1
*/






/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);

// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    console.log(key, bottle[key]);
}

Output:
color yellow
price 50
isCleaned true
capacity 1
*/






/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);

// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    console.log(key);
}

Output:
color
price
isCleaned
capacity
*/






/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);

// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    console.log(key, bottle[key]);
}
 
Output:
color yellow
price 50
isCleaned true
capacity 1
*/






/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);
 
// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    const value = bottle[key];
    console.log(key, value);
}

/* 
Output:
color yellow
price 50
isCleaned true
capacity 1
*/







/*
const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);
 
// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);


Output:
[
  [ 'color', 'yellow' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]
]
*/







const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);
 
// 3 ways to read object properties
// 1. bottle.color
// 2. bottle.['color']
// 3. bottle[key]

// console.log(keys);
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}


/* 
Output:
[
  [ 'color', 'yellow' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]
]
color yellow
price 50
isCleaned true
capacity 1
*/



// ======================================================================================= //

/*
// 'bottle.color' → This is called 'dot notation'. You access an object’s property directly by its name.

// 'bottle["color"]' (or 'bottle[key]' if 'key' is a variable) → This is called 'bracket notation'.

👉 Use dot notation when you know the exact property name and it’s a valid identifier.
👉 Use bracket notation when the property name is stored in a variable, or when it contains characters not allowed in dot notation (like 'spaces' or '-').
*/