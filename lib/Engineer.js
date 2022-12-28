const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, GitHub){
        super(name, 32, 'enginemail')
        this.GitHub = this.getGitHub();
    }

    getGitHub(){
        return 'awesomegit';
    }

    printResults(){
        console.log(`${this.name} has an id of ${this.id} and an email of ${this.email} and their github is ${this.GitHub}`)
      }
}

let engineer = new Engineer('EngineMan')

engineer.printResults();
engineer.print();

module.exports = Engineer;
