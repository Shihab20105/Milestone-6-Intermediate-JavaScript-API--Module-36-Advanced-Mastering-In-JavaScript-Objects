/*                  36-6 (optional) Borrow method from object and use it on another object */

/*
const hasanAli = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
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

const result = hasanAli.exam();
console.log(result);

// Output: Hasan Ali is participating in an exam
*/







/*
const hasanAli = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
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

const result = hasanAli.exam();

const peanutAli = {
    name: 'salted peanut',
    money: 8000,
}

// console.log(result);

const result2 = hasanAli.exam.call(peanutAli);
console.log(result2);

// Output: salted peanut is participating in an exam
*/







/*
const hasanAli = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
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

const result = hasanAli.exam();

const peanutAli = {
    name: 'salted peanut',
    money: 8000,
}

// console.log(result);

const result2 = hasanAli.exam.call(peanutAli);
// console.log(result2);

const peanutMoney = hasanAli.giveUsTreat.call(peanutAli, 400, 40);
console.log(peanutMoney);

// Output: 7560
*/








/*
const hasanAli = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
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

const result = hasanAli.exam();

const peanutAli = {
    name: 'salted peanut',
    money: 8000,
}

// console.log(result);

const result2 = hasanAli.exam.call(peanutAli);
// console.log(result2);

const peanutMoney = hasanAli.giveUsTreat.call(peanutAli, 400, 40);
console.log(peanutMoney);

const peanutMoney2 = hasanAli.giveUsTreat.apply(peanutAli, [1000, 100]);
console.log(peanutMoney2);

Output:
7560
6460
*/








const hasanAli = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
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

const result = hasanAli.exam();

const peanutAli = {
    name: 'salted peanut',
    money: 8000,
}

// console.log(result);

const result2 = hasanAli.exam.call(peanutAli);
// console.log(result2);

const peanutMoney = hasanAli.giveUsTreat.call(peanutAli, 400, 40);
console.log(peanutMoney);

const peanutMoney2 = hasanAli.giveUsTreat.apply(peanutAli, [1000, 100]);
console.log(peanutMoney2);

const peanutAliTreat = hasanAli.giveUsTreat.bind(peanutAli);
const remaining = peanutAliTreat(1000, 100);
console.log(remaining);

/* 
Output:
7560
6460
5360
*/
