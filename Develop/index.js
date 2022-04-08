// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [

//     // title name
//     type: 'input',
//     name: 
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject (err);
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
function init() {}

// Function call to initialize app
init();

