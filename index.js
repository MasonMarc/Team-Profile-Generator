const inquirer = require('inquirer');
const fs = require('fs');
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
            if (answer.emp === 'Manager') {
                makeManger();
            }
            if (answer.emp === 'Engineer') {
                makeEngineer();
            }
            if (answer.emp === 'Intern') {
                makeIntern();
            }
        })
};

// make Manager
const makeManger = () => {
    console.log('here is a manager');

    const prompt = inquirer.createPromptModule();
    prompt([
        {
            message: 'Please enter employee name',
            name: 'name',
        },
        {
            message: 'Please enter employee id Number',
            name: 'id',
        },
        {
            message: 'Please enter employee email',
            name: 'email',
        },
        {
            message: 'Please enter employee office number',
            name: 'officeNumber'
        },
    ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

            fs.appendFile('./dist/team.html', manager.managerHtml(answers.name, answers.id, answers.email, answers.officeNumber), function (err) {
                if (err) throw err;
            })
        }
        )
}
// make Engineer
const makeEngineer = () => {
    console.log('here is an engineer');

    const prompt = inquirer.createPromptModule();
    prompt([
        {
            message: 'Please enter employee name',
            name: 'name',
        },
        {
            message: 'Please enter employee id Number',
            name: 'id',
        },
        {
            message: 'Please enter employee email',
            name: 'email',
        },
        {
            message: 'Please enter employee GitHub Account Name',
            name: 'GitHub'
        },
    ])
        .then((name, id, email, GitHub) => {
            const engineer = new Engineer(name, id, email, GitHub)
            engineer.engineerHtml;

        }
        )
}
// make Intern
const makeIntern = () => {
    console.log('here is an Intern');

    const prompt = inquirer.createPromptModule();
    prompt([
        {
            message: 'Please enter employee name',
            name: 'name',
        },
        {
            message: 'Please enter employee id Number',
            name: 'id',
        },
        {
            message: 'Please enter employee email',
            name: 'email',
        },
        {
            message: 'Please enter employee school name',
            name: 'school'
        },
    ])
        .then((name, id, email, school) => {
            const intern = new Intern(name, id, email, school)
            intern.internHtml;

        }
        )
}




// at the end to add more employees or stop program
const addMore = () => {

    empChoice();
}

empChoice();