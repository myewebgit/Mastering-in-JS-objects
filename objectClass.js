const student = {
    name: 'kodom Ali',
    money:5000,
    study: 'Math',
    subjects: ['calculus', 'algebra','geometry'],
    exam: function(){
        // console.log(this.money)
        // console.log(this.money, 'is perticipating in an exam')
        return this.name + 'is perticipating in an exam' + 'costing' + this.money;
    },
    improveExam: function(subjest){
        this.exam();
        return ` ${this.name} is taking improvement exam on subject ${subjest}`

    },
    treat: function(amount){
        this.momney = this.money -amount;
        return this.money;
    }
}

// student. exam();
// const output = student.exam()
// // console.log(output)

const reExam = student.improveExam('ahhlgebra');
console.log(reExam)