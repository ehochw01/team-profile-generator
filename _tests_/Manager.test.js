const Manager = require("../lib/manager");

const newManager = new Manager("Eric", 4, "test@gmail.com", 13);

test('Testing the getName() employee method', () => {
    expect(newManager.getName()).toEqual("Eric");
});
test('Testing the getId() employee method', () => {
    expect(newManager.getId()).toEqual(4);
});
test('Testing the getEmail() employee method', () => {
    expect(newManager.getEmail()).toEqual("test@gmail.com");
});
test('Testing the overrided getRole() employee method', () => {
    expect(newManager.getRole()).toEqual("Manager");
});
test('Checking the officeNumber class property', () => {
    expect(newManager.officeNumber).toEqual(13);
});

