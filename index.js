const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//prompt of questions and returns the mardown file
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
            choices: ['Unlicense', 'Apache', 'GNU GPL v2.0', 'GNU GPL v3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Eclipse', 'Mozilla']
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
            name: 'github',
            message: 'What is you github username?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email so users can cotanct you with any questions?'
        },
    ])
    .then((data) => {
        fs.writeFile('sampleREADME.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README generated')
  );
    });
