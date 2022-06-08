// Included packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Team = require('./lib/team');
const fs = require('fs');
const template = require('./src/generateHtml');
const fileName = "./dist/generated.html";


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
          generateHtml();
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
    team.addIntern(intern);
    menuPrompt();
  });
}

function generateHtml() {
  const fileTemplate = template.createTemplate(team);
  fs.writeFile(fileName, fileTemplate, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

function init() {
  managerPrompt();
}

// Function call to initialize app
init();
