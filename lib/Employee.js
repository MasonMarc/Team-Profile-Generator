const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
    }

    getId(){
       }

    getEmail(){        
    }

    getRole(){
      return 'Employee';
    }
    
    printResults(){
      console.log(`${this.name} has an id of ${this.id} and an email of ${this.email}`)
    }
}


let employee = new Employee('Mason', 15, 'EmployeeMail');

employee.printResults();

module.exports = Employee;
