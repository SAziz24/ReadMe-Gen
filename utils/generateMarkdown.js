// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch(license) {
  case 'Apache License 2.0':
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case 'MIT License':
    return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'Mozilla Public License 2.0':
    return '[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
    case 'Boost Software License 1.0' :
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]' ;
    case 'None':
        return"";
    default:
        return '';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
    return '(https://opensource.org/licenses/Apache-2.0)';
    case 'MIT License':
    return '(https://opensource.org/licenses/MIT)';
    case 'Mozilla Public License 2.0':
    return '(https://opensource.org/licenses/MPL-2.0)';
    case 'Boost Software License 1.0':
    return '(https://www.boost.org/LICENSE_1_0.txt)';
    case 'None':
        return"";
    default:
        return '';
  }
  }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `![${license}](${renderLicenseBadge(license)})
    ### [${renderLicenseLink(license)}](${renderLicenseLink(license)})
    `;
  }
  

// function to generate markdown for README
function generateMarkdown(answers) {
    return  `
# Title
 ${answers.Title}

## Description 
 ${answers.Description}
    
 ## Table of Contents
 1. [Installation](#Installation)
 2. [Usage](#Usage)
 3. [Acceptance Criteria](#AcceptanceCriteria)
 4. [License](#License)
 5. [Contributing](#Contributing)
 6. [Tests](#Tests)
 7. [Questions](#Questions)

    
 ## Installation
    ${answers.Installation}

## Usage
    ${answers.Usage}

## Acceptance Criteria
   ${answers.AcceptanceCriteria}

 ## License
 ### ${renderLicenseSection(answers.License)}

 ${renderLicenseBadge(answers.license)}${renderLicenseLink(answers.license)}

 ## Contributing
    ${answers.Contributing}

## Tests
    ${answers.Tests}

 ## Questions
    ${answers.Questions}
    ${answers.LinkedIn}
    ${answers.Email}
    
  `;
  }
  
  module.exports = {generateMarkdown};