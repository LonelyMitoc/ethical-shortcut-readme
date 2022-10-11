// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your repo?',
            name: 'repoName'
        },
        {
            type: 'input',
            message: 'What is the description of your repo?',
            name: 'description'
        },
        {
            type: 'confirm',
            message: 'Do you need a table of content?',
            name: 'tableConfirm'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your repo?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'List any credits for collaborators, third-party assets or tutorials followed.',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'What type of license would you like the repo to have applied?',
            name: 'license'
        }
    ])
    .then((response) =>
        response.tableConfirm == true ? 
        fs.writeFile('GeneratedREADME.md',
            `# ${response.repoName}\n
## Description\n
${response.description}\n
## Table of Contents\n
- Installation\n
- Usage\n
- Credits\n
- License\n
## Installation\n
${response.installation}\n
## Usage\n
${response.usage}\n
## Credits\n
${response.credits}\n
## License\n
${response.license}\n`,
            (err) => err ? console.error(err) : console.log('Readme Generated!'))
    :
        fs.writeFile('GeneratedREADME.md',
            `# ${response.repoName}\n
## Description\n
${response.description}\n
## Installation\n
${response.installation}\n
## Usage\n
${response.usage}\n
## Credits\n
${response.credits}\n
## License\n
${response.license}\n`,
            (err) => err ? console.error(err) : console.log('Readme Generated!'))
    );


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
