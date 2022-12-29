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
            message: 'Please Select Employee type to add',
            choices: ['Engineer', 'Intern'],
            name: 'type'
        }])
        .then((answer) => {
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
    const prompt = inquirer.createPromptModule();
    prompt([
        {
            message: 'Please enter name of manager',
            name: 'name',
        },
        {
            message: 'Please enter employee id number of manager',
            name: 'id',
        },
        {
            message: 'Please enter email address of manager',
            name: 'email',
        },
        {
            message: 'Please enter office number',
            name: 'officeNumber'
        },
    ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

            fs.appendFile('./dist/team.html', manager.managerHtml(answers.name, answers.id, answers.email, answers.officeNumber),
            function (error) {
                if (answers.name === '' || typeof answers.name !== 'string') {
                    console.log('--------------------------');
                    console.log('please enter a vaid name');
                    console.log('--------------------------');
                    throw error;
                }
                if (answers.id === '' || typeof answers.id !== 'number') {
                    console.log('--------------------------');
                    console.log('please enter a vaid id');
                    console.log('--------------------------');
                    throw error;
                }
                if (answers.email === '' || typeof answers.email !== 'string') {
                    console.log('--------------------------');
                    console.log('please enter a vaid email');
                    console.log('--------------------------');
                    throw error;
                }
                if (answers.officeNumber === '' || typeof answers.officeNumber !== 'number') {
                    console.log('--------------------------');
                    console.log('please enter a vaid office number');
                    console.log('--------------------------');
                    throw error;
                }
            })
                
            empChoice();
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

            fs.appendFile('./dist/team.html', engineer.engineerHtml(answers.name, answers.id, answers.email, answers.GitHub),
                function (error) {
                    if (error) throw error;
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

            fs.appendFile('./dist/team.html', intern.internHtml(answers.name, answers.id, answers.email, answers.school),
                function (error) {
                    if (error) throw error;
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
            else if (answer.select === 'no') {
                fs.appendFile('./dist/team.html', `<body><html>`, function (error) {
                    if (error) throw error;
                })
            }

        })
}

makeManger();