// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
    .prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project:'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
    
        {
            type: 'input',
            name: 'usage',
            message: 'What are the instructions for use?'
        },

        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators:'
        },
    
        {
            type: 'list',
            name: 'licence',
            message: 'What is the licence your project uses?',
            choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Boost Software', 'Creative Commons Zero', 'Eclipse', 'Mozilla']
        },

        {
            type: 'input',
            name: 'features',
            message: 'What are the some features of your project?'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Test examples:'
        },
    
        {
            type: 'input',
            name: 'questions',
            message: 'What is your email so users can cotanct you with any questions?'
        },
    ])
    .then((data) => {
        fs.writeFile('sampleREADME.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README generated')
  );
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('sampleREADME.md', generateMarkdown(data), (err) =>
//     err ? console.error(err) : console.log('README generated')
//   );
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
