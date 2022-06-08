const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const Team = require("../lib/team");
const fs = require('fs');

const filename = "../dist/generated.html";

function createTestTeam() {
    const team = new Team();
    team.setManager(new Manager("Jared", 1, "jared@fakemail.com", 1));
    team.addEngineer(new Engineer("Alec", 2, "alec@fakemail.com", "ibealec"));
    team.addEngineer(new Engineer("Grace", 3, "grace@fakemail.com", "gchoi2u"));
    team.addEngineer(new Engineer("Tammer", 4, "tammer@fakemail.com", "tammerg"));
    team.addIntern(new Intern("John", 5, "john@fakemail.com", "2University"));
    return team;
}

function createTemplate(team) {
    console.log(team);
    let template = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid bg-danger p-5">
        <h1 class="display-6 text-center text-light">My Team</h1>
    </div>
    <div class="row m-5 row-cols-1 row-cols-md-3">
        <div class="col mb-4">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">${team.manager.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title">${team.manager.getName()}</h5>
                    <p class="card-text">ID: ${team.manager.getId()}</p>
                    <p class="card-text">Email: <a href="mailto: ${team.manager.getEmail()}" class="text-white">${team.manager.getEmail()}</a></p>
                    <p class="card-text">Office Number: ${team.manager.officeNumber}</p>

                </div>
            </div>
        </div>
`

    team.engineers.forEach((eng) => {
        template +=
`       <div class="col mb-4">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">${eng.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title">${eng.getName()}</h5>
                    <p class="card-text">ID: ${eng.getId()}</p>
                    <p class="card-text">Email: <a href="mailto: ${eng.getEmail()}" class="text-white">${eng.getEmail()}</a></p>
                    <p class="card-text">Github: <a href="https://github.com/${eng.getGithub()}" target="_blank" class="text-white">${eng.getGithub()}</a></p>
                </div>
            </div>
        </div>
`
    });

    team.interns.forEach((int) => {
        template +=
`       <div class="col mb-4">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">${int.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title">${int.getName()}</h5>
                    <p class="card-text">ID: ${int.getId()}</p>
                    <p class="card-text">Email: <a href="mailto: ${int.getEmail()}" class="text-white">${int.getEmail()}</a></p>
                    <p class="card-text">School: ${int.getSchool()}</p>
                </div>
            </div>
        </div>
`
    })

    template +=
`    </div>
</body>
</html>`
    return template;
    
}

function writeToFile(fileName, fileTemplate) {
    fs.writeFile(fileName, fileTemplate, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

const team = createTestTeam();
const fileTemplate = createTemplate(team);
writeToFile(filename, fileTemplate);

