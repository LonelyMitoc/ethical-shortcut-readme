// a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseInfo = [
    {
      license: 'Apache-2.0',
      badge: `(https://img.shields.io/badge/License-Apache_2.0-red.svg)`,
      link: `(https://opensource.org/licenses/Apache-2.0)`
    },
    {
      license: 'BSD-3-Clause',
      badge: `(https://img.shields.io/badge/License-BSD_3--Clause-green.svg)`,
      link: `(https://opensource.org/licenses/BSD-3-Clause)`
    },
    {
      license: 'BSD-2-Clause',
      badge: `(https://img.shields.io/badge/License-BSD_2--Clause-lightgreen.svg)`,
      link: `(https://opensource.org/licenses/BSD-2-Clause)`
    },
    {
      license: 'GPL-2.0',
      badge: `(https://img.shields.io/badge/License-GPL_2.0-lightblue.svg)`,
      link: `(https://opensource.org/licenses/GPL-2.0)`
    },
    {
      license: 'GPL-3.0',
      badge: `(https://img.shields.io/badge/License-GPL_3.0-blue.svg)`,
      link: `(https://opensource.org/licenses/GPL-3.0)`
    },
    {
      license: 'LGPL-2.0',
      badge: `(https://img.shields.io/badge/License-LGPL_2.0-yellow.svg)`,
      link: `(https://opensource.org/licenses/LGPL-2.0)`,
    },
    {
      license: 'LGPL-2.1',
      badge: `(https://img.shields.io/badge/License-LGPL_2.1-yellowgreen.svg)`,
      link: `(https://opensource.org/licenses/LGPL-2.1)`,
    },
    {
      license: 'LGPL-3.0',
      badge: `(https://img.shields.io/badge/License-LGPL_3.0-brightgreen.svg)`,
      link: `(https://opensource.org/licenses/LGPL-3.0)`,
    },
    {
      license: 'MIT',
      badge: `(https://img.shields.io/badge/License-MIT-blueviolet.svg)`,
      link: `(https://opensource.org/licenses/MIT)`,
    },
    {
      license: 'MPL-2.0',
      badge: `(https://img.shields.io/badge/License-MPL_2.0-ff69b4.svg)`,
      link: `(https://opensource.org/licenses/MPL-2.0)`,
    },
    {
      license: 'CDDL-1.0',
      badge: `(https://img.shields.io/badge/License-CDDL_1.0-9cf.svg)`,
      link: `(https://opensource.org/licenses/CDDL-1.0)`,
    },
    {
      license: 'EPL-2.0',
      badge: `(https://img.shields.io/badge/License-EPL_2.0-lightgrey.svg)`,
      link: `(https://opensource.org/licenses/EPL-2.0)`,
    },
    {
      license: 'ISC',
      badge: `(https://img.shields.io/badge/License-ISC-f0f8ff.svg)`,
      link: `(https://opensource.org/licenses/ISC)`,
    }
  ]

  switch (data) {
    case 'Apache-2.0' :
      response = `[![${licenseInfo[0].license}]${licenseInfo[0].badge}]${licenseInfo[0].link}`;
      break;

    case 'BSD-3-Clause' :
      response = `[![${licenseInfo[1].license}]${licenseInfo[1].badge}]${licenseInfo[1].link}`;
      break;

    case 'BSD-2-Clause' :
      response = `[![${licenseInfo[2].license}]${licenseInfo[2].badge}]${licenseInfo[2].link}`;
      break;

    case 'GPL-2.0' :
      response = `[![${licenseInfo[3].license}]${licenseInfo[3].badge}]${licenseInfo[3].link}`;
      break;

    case 'GPL-3.0' :
      response = `[![${licenseInfo[4].license}]${licenseInfo[4].badge}]${licenseInfo[4].link}`;
      break;

    case 'LGPL-2.0' :
      response = `[![${licenseInfo[5].license}]${licenseInfo[5].badge}]${licenseInfo[5].link}`;
      break;

    case 'LGPL-2.1' :
      response = `[![${licenseInfo[6].license}]${licenseInfo[6].badge}]${licenseInfo[6].link}`;
      break;

    case 'LGPL-3.0' :
      response = `[![${licenseInfo[7].license}]${licenseInfo[7].badge}]${licenseInfo[7].link}`;
      break;

    case 'MIT' :
      response = `[![${licenseInfo[8].license}]${licenseInfo[8].badge}]${licenseInfo[8].link}`;
      break;

    case 'MPL-2.0' :
      response = `[![${licenseInfo[9].license}]${licenseInfo[9].badge}]${licenseInfo[9].link}`;
      break;

    case 'CDDL-1.0' :
      response = `[![${licenseInfo[10].license}]${licenseInfo[10].badge}]${licenseInfo[10].link}`;
      break;

    case 'EPL-2.0' :
      response = `[![${licenseInfo[11].license}]${licenseInfo[11].badge}]${licenseInfo[11].link}`;
      break;

    case 'ISC' :
      response = `[![${licenseInfo[12].license}]${licenseInfo[12].badge}]${licenseInfo[12].link}`;
      break;

    case 'n/a' :
      response = "";
      break;
  }
  return response;
};

function renderLicenseSection(data) {
  if(data !== 'n/a') {
    return `Licensed under the ${data} license.`
  } else {
    return `No applicable license for this project.`
  };
};

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.repoName}

  ${renderLicenseBadge(data.license, data)}

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
  ${renderLicenseSection(data.license, data)}
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
