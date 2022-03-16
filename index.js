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
            choices: ['Apache 2.0', 'MIT License', 'Mozilla Public License 2.0', 'Boost Software License 1.0','None'],
            validate: (licenseInput) => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log ("Choose a license for your project.");
                    return false;
                }
        }
        },
        {
            type:"input",
            name: "Contributing",
            message: "How can users contribute to this project?",
        },{
            type:"input",
            name: "Tests",
            message: "Give test instructions",
        },{
            type:"input",
            name: "Contact",
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

function init() {
    // Use the questions to prompt the user in command line
    inquirer.prompt(questions)
        // Use the user's answers to generate the markdown for the README.md and output it to a new directory
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('./sample-readme', readmeContent);
        });
}

promptUser();


