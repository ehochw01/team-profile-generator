/* GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Team = require('./lib/team');

const team = new Team();

function managerPrompt() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the Manager's name"
      },
      {
        type: "input",
        name: "id",
        message: "Enter the Manager's employee ID"
      },
      {
        type: "input",
        name: "email",
        message: "Enter the Manager's Email Address"
      },
      {
        type: "input",
        name: "office",
        message: "Enter the Manager's Office Number"
      }
    ])
    .then(data => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      team.setManager(manager);
      menuPrompt();
    });
}

function menuPrompt() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menu',
        message: "How would you like to proceed?",
        choices: ["Add an Engineer", "Add an Intern", "Finishing Building Team"]
      }
    ])
    .then(data => {
      switch(data.menu) {
        case "Add an Engineer":
          engineerPrompt();
          break;
        case "Add an Intern":
          internPrompt();
          break;
        case "Finishing Building Team":
          console.log(team);
          break;
      }
    });
}

function engineerPrompt(){
  console.log("engineerPrompt()");
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the Engineer's name"
    },
    {
      type: "input",
      name: "id",
      message: "Enter the Engineer's employee ID"
    },
    {
      type: "input",
      name: "email",
      message: "Enter the Engineer's Email Address"
    },
    {
      type: "input",
      name: "github",
      message: "Enter the Engineer's Github Username"
    }
  ])
  .then(data => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    team.addEngineer(engineer);
    menuPrompt();
  });
}
function internPrompt(){
  console.log("internPrompt()");
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the Intern's name"
    },
    {
      type: "input",
      name: "id",
      message: "Enter the Intern's employee ID"
    },
    {
      type: "input",
      name: "email",
      message: "Enter the Intern's Email Address"
    },
    {
      type: "input",
      name: "school",
      message: "Enter the Intern's School"
    }
  ])
  .then(data => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    team.addIntern(engineer);
    menuPrompt();
  });
}

// TODO: Create a function to initialize app
function init() {
  managerPrompt();
}

// Function call to initialize app
init();
