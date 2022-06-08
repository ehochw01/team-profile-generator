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
    team.addIntern(new Engineer("John", 5, "john@fakemail.com", "2University"));
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
                <div class="card-header">Manager</div>
                <div class="card-body">
                    <h5 class="card-title">Jared</h5>
                    <p class="card-text">ID: 1</p>
                    <p class="card-text">Office Number: 1</p>
                    <p class="card-text">Email: <a href="mailto: jared@fakemail.com" class="text-white">jared@fakemail.com</a></p>
                </div>
            </div>
        </div>`

    template +=
`    
    </div>
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

