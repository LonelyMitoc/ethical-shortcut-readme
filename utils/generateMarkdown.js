// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license !== null) {
    return `![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)`
  }
  return;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.repoName}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  Licensed under the ${data.license} license.
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  Please contact me below for further questions:  
  Github username: [${data.githubusername}](https://github.com/${data.githubusername})  
  Email: ${data.email}

`;
};

module.exports = generateMarkdown;
