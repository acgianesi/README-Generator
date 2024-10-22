// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of the project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please elaborate on how to use it.",
    },
    {
        type: "input",
        name: "contributing",
        message: "List any collaborators",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license.",
        choices: ["x", "y", "z"],
    },
    {
        type: "input",
        name: "tests",
        message: "What are the testing instructions?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email so users can ask questions ",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("Successfully created README.md!");
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Generating README.md file...");
        const markdownContent = generateMarkdown(answers);
        writeToFile("./sample_output/README.md", markdownContent);
    })
}

// Function call to initialize app
init();
