const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

class Team {
    constructor(){
        this.manager = "";
        this.engineers = [];
        this.interns = [];
    }
    setManager(manager) {
        this.manager = manager;
    }
    getManager() {
        if (this.manager == "") {
            return "No manager has been added";
        } else {
            return this.manager;
        }
    }
    addIntern(intern){
        this.interns.push(intern);
    }
    addEngineer(engineer){
        this.engineers.push(engineer);
    }
}

module.exports = Team;
