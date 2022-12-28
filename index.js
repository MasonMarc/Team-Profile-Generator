const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// choose what type of employee
let empChoice = () => {
const prompt = inquirer.createPromptModule();
prompt([
  {
    type: 'list',
    message: 'Please Select Employee type',
    choices: ['Manager', 'Engineer', 'Intern'],
    name: 'emp'
  }])
  .then((answer) => {
    if (answer.emp === 'Manager'){
        makeManger();
    }
    if (answer.emp === 'Engineer'){
        makeEngineer();
    }
    if (answer.emp === 'Intern'){
        makeIntern();
    }
})};

// make Manager
const makeManger = () => {
    console.log('here is a manager');
}
// make Engineer
const makeEngineer = () => {
    console.log('here is a engineer');
}
// make Intern
const makeIntern = () => {
    console.log('here is a intern');
}



// at the end to add more eployees or stop program
const addMore = () => {

    empChoice();
}

empChoice();