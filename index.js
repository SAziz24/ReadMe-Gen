const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');
//const { error } = require('console');

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const promptUser = () => {
    inquirer.prompt([
        {
            name: "Title",
            message: "What is the title of your project?",
            type:"input",
        },{
            type:"input",
            name: "Description",
            message: "What is the project about? Give a detailed description of your project",
            
        },{
            type:"input",
            name: "Installation",
            message: "What does the user need to install to run this app?",
            
        },{
            type:"input",
            name: "Usage",
            message: "How to use this applicaiton?",
        },{
            type:"list",
            message: "What is the license for this project?",
            name: "License",
            choices: [
                "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
                "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
                "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", 
                "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" , 
                "None"],
        },{
            type:"input",
            name: "Contributing",
            message: "How can users contribute to this project?",
        },{
            type:"input",
            name: "Tests",
            message: "Give test instructions",
        },{
            type:"input",
            name: "Questions",
            message: "Enter your github username.",
        },
        {
            type: 'input',
            name: 'LinkedIn',
            message: 'Enter your LinkedIn URL.',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email address',
        }
    ]).then(answers => {
        writeToFile(answers)
        console.log('Successfully wrote to README.md!')
    }).catch((err) => console.error(err));

};

const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
}

promptUser();


