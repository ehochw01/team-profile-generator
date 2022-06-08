const Intern = require("../lib/intern");

const newInt = new Intern("Eric", 4, "test@gmail.com", "Tufts");

test('Testing the getName() inherited employee method', () => {
    expect(newInt.getName()).toEqual("Eric");
});
test('Testing the getId() inherited employee method', () => {
    expect(newInt.getId()).toEqual(4);
});
test('Testing the getEmail() inherited employee method', () => {
    expect(newInt.getEmail()).toEqual("test@gmail.com");
});
test('Testing the overrided getRole() Intern method', () => {
    expect(newInt.getRole()).toEqual("Intern");
});
test('Testing the getSchool() Intern method', () => {
    expect(newInt.getSchool()).toEqual("Tufts");
});