
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
let questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter author name:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter intallation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage description',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'what is the name of the contributors?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['Apache', 'Other', 'MIT', 'GPLv2'],
    }
  ];
  inquirer.prompt(questions).then((answers) => {
    // Use the answers provided by the user to generate the README file content
    const readmeContent = `# ${answers.title}

${answers.description}

## Description

...

## Installation

...

## Usage

...

## Contributing

...

## License

...

## Table of Contents
- Description
- Installation
- Usage
- Contributing
- License

## Dependencies
- [inquirer]: A collection of common interactive command line user interfaces. Version 8.2.0.
- [fs]: A built-in module that provides file system related functionality. Version 16.11.1.


Created by ${answers.author}`;


    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README file created successfully!');
      }
    });
  });
