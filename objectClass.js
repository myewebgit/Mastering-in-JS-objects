const student = {
    name: 'kodom Ali',
    money:5000,
    study: 'Math',
    subjects: ['calculus', 'algebra','geometry'],
    exam: function(){
        console.log(this.money)
        console.log(this.money, 'is perticipating in an exam')
        return this.name + 'is perticipating in an exam' + 'costing' + this.money;
    }
}

student. exam();
const output = student.exam()
console.log(output)