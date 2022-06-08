const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const Team = require("../lib/team");
const fs = require('fs');

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
}

const team = createTestTeam();
createTemplate(team);
