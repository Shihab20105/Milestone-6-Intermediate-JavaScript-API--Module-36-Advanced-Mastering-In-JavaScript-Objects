/*                      36-8 Module summary and checklist */

/*
* Compare object, referential integrity
* JavaScript call(), apply() Methods
* this keyword in JavaScript
__________________________________________________________________________________
_________________________________________
(*) Compare object, referential integrity
_________________________________________

>> name1 == name2         
← false

>> const name1 = {
    firstName: "Hasan",
    lastName: "Alam"
}

>> const name3 = name1
name1 == name3
← true






>> name1 === name2
← false


>> const name2 = {
    firstName: "Hasan",
    lastName: "Alam"
}


>> name1 === name3
← true

______________________________________________________________________

>> const name1 ={
    firstName: "Hasan",
    lastName: "Alam"
}


>> const name2 = {
    firstName: "Hasan",
    lastName: "Alam"
}


>> console.log(JSON.stringify(name1))
    {"firstName":"Hasan", "lastName":"Alam"}

>> console.log(JSON.stringify(name2))
    {"firstName":"Hasan", "lastName":"Alam"}



>> JSON.stringify(name1) == JSON.stringify(name2)
← true

>> JSON.stringify(name1) === JSON.stringify(name2)
← true


// The order of object properties is important


>> const name1 = {
    firstName: "Hasan",
    lastName: "Alam"
}
← undefined


>> const name2 = {
    lastName: "Alam",
    firstName: "Hasan"
}
← undefined

>> JSON.stringify(name1) == JSON.stringify(name2)
← false

// ======================================================================================= //
________________________________________________
(*) JavaScript call(), apply() and bind() Methods
________________________________________________

*) call():
call() method in JavaScript is used to invoke the function, it will pass an object as first parameter which will be the value of this inside function.


var ComputerSystem = {
    type: "Desktop",
    os: "Linux",
    DisplayInfo: function() {
        console.log("Type: " + this.type);
        console.log("OS: " + this.os);
    }
};

function DisplayDeviceInfo (deviceID, mfDate) {
    console.log("ID: " + deviceID);
    this. DisplayInfo();
console.log("Date: " + mfDate);
}

DisplayDeviceInfo.call(ComputerSystem, "COMP001", "12-JAN-17");

Output:
ID: COMP001
Type: Desktop
OS: Linux
Date: 12-JAN-17
_____________________________________________________________________

*) apply():
apply() method in JavaScript is same as call(). It is used to invoke the function but the parameters will be passed in array. This may be very useful in scenarios where we get the input in form of array or we have to pass variable number of arguments.


var ComputerSystem = {
    type: "Desktop",
    os: "Linux",
    DisplayInfo: function() {
        console.log("Type: " + this.type);
        console.log("OS: " + this.os);
    }
};

function DisplayDeviceInfo (deviceID, mfDate) {
    console.log("ID: = " + deviceID);
    this. DisplayInfo();
console.log("Date: = " + mfDate);
}

DisplayDeviceInfo.apply(ComputerSystem, ["COMP001", "12-JAN-17"]);

Output:
ID: = COMP001
Type: Desktop
OS: Linux
Date: = 12-JAN-17
______________________________________________________________________________________

*) bind():
bind() method in JavaScript is used to create new function, it will pass an object as parameter which will be the value of this inside function.


var ComputerSystem = {
    type: "Desktop",
    os: "Linux",
    DisplayInfo: function() {
        console.log("Type: " + this.type);
        console.log("OS: " + this.os);
    }
};

function DisplayDeviceInfo (deviceID, mfDate) {
    console.log("ID: = " + deviceID);
    this. DisplayInfo();
console.log("Date: = " + mfDate);
}

var deviceInfo = DisplayDeviceInfo.bind(ComputerSystem);

deviceInfo("COMP001", "12-JAN-17");

Output:
ID: = COMP001
Type: Desktop
OS: Linux
Date: = 12-JAN-17 



                 call()                     apply()                   bind()
Execution ---> At the time of binding ---- At the time of binding --- At the time when we 
                                                                      execute the return function
Parameter ---> any number of arguments ---- Array []            ----- array and any number
               one by one.                                            of arguments

// ======================================================================================= //

______________________________
(*) this keyword in JavaScript
______________________________

*) this keyword in a function:

>> function myFunction() {
    return this;
 }
← undefined
>> myFunction()
← Window https://www.programming-hero.com/


*) this keyword in a object method binding:

1)
>> let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
 };
← undefined
>> person.firstName + " " + person.lastName;
← "John Doe"


2)
>> person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
        return firstName + " " + lastName;
    }
};
← ▸ Object {firstName: "John", lastName: "Doe", id: 5566, fullName: fullName()}
>> person.fullName()

▸ Uncaught ReferenceError: firstName is not defined
    fullName debugger eval code: 6
    <anonymous> debugger eval code:1
    [Learn More]


3)
>> person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
← ▸ Object {firstName: "John", lastName: "Doe", id: 5566, fullName: fullName()}
>> person.fullName()
← "John Doe"

______________________________________________________________________________

*) So, what is "this" in JS?

In JavaScript, the this keyword refers to an object, it's not any variable. We can not change the value of it. Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

* In an object method, this refers to the object.
* Alone, this refers to the global object.
* In a function, this refers to the global object.
* In an event, this refers to the element that received the event.
* Methods like call(), apply(), and bind() can refer this to any object.

*/