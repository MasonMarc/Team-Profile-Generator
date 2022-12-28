const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }



  // getRole() {
  //   return 'Employee';
  // }

  print(){
    console.log(`${this.name} has an id of ${this.id} and an email of ${this.email}`)
  }
}
// let prop = '';
// const getName = (answers) => {
//   console.log(`${answers.name}`);
//   console.log(`${answers.id}`);
//   console.log(`${answers.email}`);
//   const name = `${answers.name}`;
//   const id = `${answers.id}`;
//   const email = `${answers.email}`;
//   prop = `'${name}', ${id}, '${email}'`;
//   console.log('------------');
//   console.log(prop);
// }


// const prompt = inquirer.createPromptModule();
// prompt([
//   {
//     message: 'What is your name?',
//     name: 'name',
//   },
//   {
//     message: 'What is your ID?',
//     name: 'id',
//   },
//   {
//     message: 'What is your email?',
//     name: 'email',
//   }
// ])

//   .then((answers) => getName(answers))

//   .catch(failureCallBack)
 
let employee = new Employee('Mason', 31, 'mason@gmail.com');
employee.print();

module.exports = Employee;

// TODO: Make employees go to html page when you run program
// TODO: Make employee info come from prompt
// TODO: Create testsgi