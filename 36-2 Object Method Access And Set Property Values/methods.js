/*                      36-2 Object method access and set property values */

/*
const student = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.name, 'is participating in an exam');
    }
}

student.exam();

// Output: Hasan Ali is participating in an exam
*/





/*
const student = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    }
}

const output = student.exam();
console.log(output);

// Output: Hasan Aliis participating in an exam
*/



/*
const student = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
console.log(reExam);

// Output: Hasan Ali is taking improvement exam on algebra
*/





/*
const student = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    giveUsTreat: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);
const remaining = student.giveUsTreat(900);
console.log(remaining);

// Output: 4100
*/





/*
const student = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    giveUsTreat: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);
const remaining = student.giveUsTreat(900);
console.log(remaining);
const windingRemaining = student.giveUsTreat(500);
console.log(windingRemaining);
 
Output: 
4100
3600
*/






const student = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    giveUsTreat: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);
const remaining = student.giveUsTreat(900, 100);
console.log(remaining);
const windingRemaining = student.giveUsTreat(500, 50);
console.log(windingRemaining);

/* 
Output: 
4000
3450
*/
