const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super('Tony', 24, 'rocketmail')
        this.officeNumber = this.getofficeNumber();
    }

    getofficeNumber(){
        return '11';
    }

    printResults(){
        console.log(`${this.name} has an id of ${this.id} and an email of ${this.email} and is in office ${this.officeNumber}`)
      }
}

let manager = new Manager()

manager.printResults();

module.exports = Manager;
