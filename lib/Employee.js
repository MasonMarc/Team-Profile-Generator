const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email){
        this.name = this.getName();
        this.id = this.getId();
        this.email = this.getEmail();
    }

    getName(){
      console.log(`Name is `);
      return 'Mason';
    }

    getId(){
        console.log(`Employee ID is `);
        return '24';
    }

    getEmail(){
        console.log(`Email is `)
        return 'gmail';
    }

    getRole(){
      return 'Employee';
    }
    
    printResults(){
      console.log(`${this.name} has an id of ${this.id} and an email of ${this.email}`)
    }
}

// const prompt = inquirer.createPromptModule();
// prompt([
//   {
//     message: 'Please Enter Employees name',
//     name: 'name',
//   },
//   {
//     message: 'Please Enter Employees Id Number',
//     name: 'id',
//   },
//   {
//     message: 'Please Enter Employees email',
//     name: 'email',
//   }
// ])

let employee = new Employee();


employee.printResults();
module.exports = Employee;
