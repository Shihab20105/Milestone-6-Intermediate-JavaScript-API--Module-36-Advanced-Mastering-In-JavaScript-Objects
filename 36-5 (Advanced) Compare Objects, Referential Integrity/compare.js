/*                      36-5 (advanced) Compare objects, referential integrity */

/*
const first = 2;
const second = 2;
if(first === second){
    console.log('They are same');
} 
else{
    console.log('Different');
}

// Output: They are same
*/





/*
const first = {a: 2};
const second = {a: 2};
if(first === second){
    console.log('They are same');
} 
else{
    console.log('Different');
}

// Output: Different
*/






/*
const first = {};
const second = {};
if(first === second){
    console.log('They are same');
} 
else{
    console.log('Different');
}

// Output: Different
*/





/*
const first = {a: 5};
const second = {a: 5};
const third = second;
if(third === second){
    console.log('They are same');
} 
else{
    console.log('Different');
}

// Output: They are same
*/





/*
// const first = {a: 5};
// const second = {a: 5};
// const third = second;
// if(third === second){
//     console.log('They are same');
// } 
// else{
//     console.log('Different');
// }

// Do not use this method to compare object or array
const first = {a: 5};
const second = {a: 5};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);

// Output: {"a":5} {"a":5}
*/





/*
// Do not use this method to compare object or array
const first = {a: 5};
const second = {a: 5};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);

if(firstString === secondString){
    console.log('Same');
}
else{
    console.log('Different');
}

Output:
{"a":5} {"a":5}
Same
*/





/*
// Do not use this method to compare object or array
const first = {a: 5, b: 2, c: 5};
const second = {a: 5, b: 2, c: 5};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);

if(firstString === secondString){
    console.log('Same');
}
else{
    console.log('Different');
}

Output:
{"a":5,"b":2,"c":5} {"a":5,"b":2,"c":5}
Same
*/






/*
// Do not use this method to compare object or array
const first = {a: 5, b: 2, c: 5};
const second = {a: 5, c: 5, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);

if(firstString === secondString){
    console.log('Same');
}
else{
    console.log('Different');
}
 
Output:
{"a":5,"b":2,"c":5} {"a":5,"c":5,"b":2}
Different
*/




/*
// Do not use this method to compare object or array
const first = {a: 5, b: 2, c: 5};
const second = {a: 5, c: 5, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('Same');
// }
// else{
//     console.log('Different');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys === secondKeys){
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);

Output: false
*/






/*
// Do not use this method to compare object or array
const first = {a: 5, b: 2, c: 5};
const second = {a: 5, c: 5, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('Same');
// }
// else{
//     console.log('Different');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);

// Output: true
*/







/*
// Do not use this method to compare object or array
const first = {a: 5, b: 2, d: 5};
const second = {a: 5, c: 5, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('Same');
// }
// else{
//     console.log('Different');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        // return true;
        for(const key of firstKeys){
            console.log(key);
        }
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);

Output:
a
b
d
undefined
*/







/*
// Do not use this method to compare object or array
const first = {a: 5, b: 2, d: 5};
const second = {a: 5, c: 5, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('Same');
// }
// else{
//     console.log('Different');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        // return true;
        for(const key of firstKeys){
            // console.log(key);
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);

// Output: false
*/








// Do not use this method to compare object or array
const first = {a: 5, b: 2, c: 5, e: 1};
const second = {a: 5, c: 5, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('Same');
// }
// else{
//     console.log('Different');
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        // return true;
        for(const key of firstKeys){
            // console.log(key);
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);

// Output: false


