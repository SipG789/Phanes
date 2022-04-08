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
        message: 'What is the title of your file?(Required)',
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
                console.log('Be sure to enter a description!');
                return false;
            }
        }
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't accientally execute the ressolve function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: "You did it! File Created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
};

// Function call to initialize app
init();

