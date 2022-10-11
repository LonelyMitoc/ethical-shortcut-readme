// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
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
            type: 'confirm',
            message: 'Do you need a table of content?',
            name: 'tableConfirm'
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
            message: 'What type of license would you like the project to have applied?',
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
    ])
    .then((response) =>
        response.tableConfirm == true ? 
        fs.writeFile('GeneratedREADME.md',
`# ${response.repoName}\n
![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg)\n
## Description\n
${response.description}\n
## Table of Contents\n
- [Installation](https://github.com/LonelyMitoc/ethical-shortcut-readme/blob/main/GeneratedREADME.md#installation)\n
- [Usage](https://github.com/LonelyMitoc/ethical-shortcut-readme/blob/main/GeneratedREADME.md#usage)\n
- [License](https://github.com/LonelyMitoc/ethical-shortcut-readme/blob/main/GeneratedREADME.md#license)\n
- [Contributing](https://github.com/LonelyMitoc/ethical-shortcut-readme/blob/main/GeneratedREADME.md#contributing)\n
- [Tests](https://github.com/LonelyMitoc/ethical-shortcut-readme/blob/main/GeneratedREADME.md#tests)\n
- [Questions](https://github.com/LonelyMitoc/ethical-shortcut-readme/blob/main/GeneratedREADME.md#questions)\n
## Installation\n
${response.installation}\n
## Usage\n
${response.usage}\n
## License\n
Licensed under the ${response.license} license.\n
## Contributing\n
${response.contribute}\n
## Tests\n
${response.test}\n
## Questions\n
${response.githubusername}\n`,
            (err) => err ? console.error(err) : console.log('Readme Generated!'))
    :
        fs.writeFile('GeneratedREADME.md',
`# ${response.repoName}\n
![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg)\n
## Description\n
${response.description}\n
## Installation\n
${response.installation}\n
## Usage\n
${response.usage}\n
## License\n
Licensed under the ${response.license} license.\n
## Contributing\n
${response.contribute}\n
## Tests\n
${response.test}\n
## Questions\n
${response.test}\n`,
            (err) => err ? console.error(err) : console.log('Readme Generated!'))
    );


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
