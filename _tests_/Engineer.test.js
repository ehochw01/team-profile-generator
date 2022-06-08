// const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

const newEng = new Engineer("Eric", 4, "test@gmail.com", "MyGithubUsername");

test('Testing the getName() inherited employee method', () => {
    expect(newEng.getName()).toEqual("Eric");
});
test('Testing the getId() inherited employee method', () => {
    expect(newEng.getId()).toEqual(4);
});
test('Testing the getEmail() inherited employee method', () => {
    expect(newEng.getEmail()).toEqual("test@gmail.com");
});
test('Testing the overrided getRole() engineer method', () => {
    expect(newEng.getRole()).toEqual("Engineer");
});
test('Testing the getGithub() method specific to the Engineer class', () => {
    expect(newEng.getId()).toEqual(4);
});
