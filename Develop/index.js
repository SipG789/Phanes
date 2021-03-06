// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { title } = require('process');


// TODO: Create an array of questions for user input
const questions = [
    {
        // title name
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?(Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        // description of project
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Be sure to enter a description! Consider, what was your motivation for this project?');
                return false;
            }
        }
    },
    {
        // installation 
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Provide a step-by-step description to get your app running!');
                return false;
            }
        }
    },
    {
        // usage
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Be sure to include the use of your app!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to include collaborators?',
        default: true
    },
    {
        // credits 
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        when: ({ confirmAbout }) => {
            if (confirmAbout) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        // test
        type: 'input',
        name: 'test',
        message: 'Include instructions on how to test your app.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Enter instructions!');
                return false;
            }
        }
    },
    {
        // licenses 
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses did you use for this project? (check all that apply)',
        choices: ['None', 'Apache2.0', 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC']
    },
    {
        // GitHub link 
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        // email 
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {

        fs.writeFile('./README.md', data, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File Write Complete!');
        });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(markdownData => {
        writeToFile(generateMarkdown(markdownData))
    })
};

// Function call to initialize app
init();

