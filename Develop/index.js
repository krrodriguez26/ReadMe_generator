const Choices = require("inquirer/lib/objects/choices");

const writeFile = require("fs");
const  inquirer = require('inquirer');
const  generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");


// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is your project title?",
        name:"Title"
    },
    {
        type: "input",
        message: "Project description",
        name:"Description"  
    },
    {
        type: "input",
        message: "What steps are required to install your project",
        name:"Installation" 
    },
    {
        type: "input",
        message: "Provide instructions for use",
        name:"Usage"  
    },
    {
        type: "list",
        message: "Which license will you want to use?",
        name:"License", 
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "None"
        ]
    },
    {
        type: "input",
        message: "Do you have any contributors?",
        name:"Contributors" 
    },
    {
        type: "input",
        message: "How will you test your project?",
        name:"Test" 
    },
    {
        type: "input",
        message: "Contact Info",
        name:"Contact" 
    },
    {
        type: "input",
        message: "Your Github username?",
        name:"Username" 
    },
    {
        type: "input",
        message: "What is your email?",
        name:"Email" 
    }

];

// function to write README file
function readmeWriter(fileName, data) {
    writeFile.writeFileSync(path.join(process.cwd(), fileName),data 
    )}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) =>  {
   const response = generateMarkdown(answers);
   console.log(answers);
   readmeWriter("README.md", response);
  })
}

// function call to initialize program
init();
 