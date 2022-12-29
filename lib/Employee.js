const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getRole() {
    return 'Employee';
  }

  print(){
    console.log(`${this.name} has an id of ${this.id} and an email of ${this.email}`)
  }
}




module.exports = Employee;


// TODO: Create tests