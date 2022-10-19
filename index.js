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
        type: 'list',
        message: 'What type of license would you like the project to have applied? (Pick one)',
        choices: ['Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL-2.0', 'GPL-3.0', 'LGPL-2.0', 'LGPL-2.1', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0', 'ISC', 'n/a'],
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


// a function to write README file
function writeToFile() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const readmeGenerate = generateMarkdown(response);

        fs.writeFile('./output/README.md', readmeGenerate, (err) => err ? console.log('Error: Please try again.') : console.log('README Generated!'))
    });
 }

// a function to initialize app
function init() {
    writeToFile();
 }

// Function call to initialize app
init();
