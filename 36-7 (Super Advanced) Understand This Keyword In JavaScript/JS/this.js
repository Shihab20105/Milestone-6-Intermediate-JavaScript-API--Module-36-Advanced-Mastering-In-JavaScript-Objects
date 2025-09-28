/*                  36-7 (super advanced) Understand this keyword in JavaScript */

// console.log(this);


const hasanAli = {
    name: 'Hasan Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    examArrow: () =>{
        console.log(this);
    },
    examNested: () =>{  
        const arrow = () =>{
            console.log(this);
        }
        arrow();
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

hasanAli.exam();


const peanutAli = {
    name: 'salted peanut',
    money: 8000,
}

peanutAli.exam = hasanAli.exam;
peanutAli.exam();

function clickHandler(){
    console.log('Inside click handler',this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})