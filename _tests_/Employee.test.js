const Employee = require("../lib/employee");

const newEmp = new Employee("Eric", 4, "test@gmail.com");

test('Testing the getName() employee method', () => {
    expect(newEmp.getName()).toEqual("Eric");
});
test('Testing the getId() employee method', () => {
    expect(newEmp.getId()).toEqual(4);
});
test('Testing the getEmail() employee method', () => {
    expect(newEmp.getEmail()).toEqual("test@gmail.com");
});
test('Testing the getRole() employee method', () => {
    expect(newEmp.getRole()).toEqual("Employee");
});
