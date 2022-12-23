const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school){
    super('Studentman', 56, 'studentmail')
    this.school = this.getschool();
}

getschool(){
    return 'UNCC';
}

printResults(){
    console.log(`${this.name} has an id of ${this.id} and an email of ${this.email} and goes to ${this.school}`)
  }
}

let intern = new Intern()

intern.printResults();

module.exports = Intern;
