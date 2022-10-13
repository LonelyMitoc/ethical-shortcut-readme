// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'repoName'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'What type of license would you like the project to have applied? (Pick one)',
        choices: ['Apache2.0', 'GPLv2', 'GPLv3', 'MIT', 'ISC'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What are the contirbution guidelines for the project?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'What are the test instructions for the project??',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubusername'
    },
    {
        type: 'input',
        message: 'What is your email for further questions?',
        name: 'email'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
    .prompt(questions)
    .then((response) => {
        const readmeGenerate = generateMarkdown(response);

        fs.writeFile(`${fileName}`+'.md', readmeGenerate, (err) => err ? console.error(err) : console.log('README Generated!'))
    });
 }

// TODO: Create a function to initialize app
function init() {
    writeToFile();
 }

// Function call to initialize app
init();
