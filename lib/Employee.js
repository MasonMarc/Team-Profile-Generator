const inquirer = require('inquirer');
const fs = require('fs'); 

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }



  getRole() {
    return 'Employee';
  }

  print(){
    console.log(`${this.name} has an id of ${this.id} and an email of ${this.email}`)
  }
}


const prompt = inquirer.createPromptModule();
prompt([
  {
    message: 'What is your name?',
    name: 'name',
  },
  {
    message: 'What is your ID?',
    name: 'id',
  },
  {
    message: 'What is your email?',
    name: 'email',
  }
])

  .then(({name, id, email}) =>{
    const employee = new Employee(name, id, email);

    employee.print();
  });

module.exports = Employee;

// TODO: Make employees go to html page when you run program
// TODO: Make employee info come from prompt
// TODO: Create testsgi