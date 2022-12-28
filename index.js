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
            name: 'type'
        }])
        .then((answer) => {
            if (answer.type === 'Manager') {
                makeManger();
            }
            if (answer.type === 'Engineer') {
                makeEngineer();
            }
            if (answer.type === 'Intern') {
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
            addMore();

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
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.GitHub)

        fs.appendFile('./dist/team.html', engineer.engineerHtml(answers.name, answers.id, answers.email, answers.GitHub), function (err) {
            if (err) throw err;
        })
        addMore();
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
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

        fs.appendFile('./dist/team.html', intern.internHtml(answers.name, answers.id, answers.email, answers.school), function (err) {
            if (err) throw err;
        })
        addMore();
    }
    )
}



// at the end to add more employees or stop program
const addMore = () => {
    const prompt = inquirer.createPromptModule();
    prompt([
        {
            type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['yes', 'no'],
            name: 'select'
        }])
        .then((answer) => {
            if (answer.select === 'yes') {
                empChoice();
            }
            
        })
}

empChoice();