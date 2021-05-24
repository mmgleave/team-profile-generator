const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern.js');

const intern = new Intern("Michelle", "12345", "test@gmail.com", "UofU")

test('creates new engineer object', () => {
    expect(typeof(intern)).toBe("object");
});

test('sets school with Intern cosntructor', () => {
    expect(intern.school).toBe("UofU");
});

test('gets name via getName function', () => {
    expect(intern.getName()).toBe("Michelle");
});

test('gets id via getId function', () => {
    expect(intern.getId()).toBe("12345");
});

test('gets email via getEmail function', () => {
    expect(intern.getEmail()).toBe("test@gmail.com");
});

test('gets github username via getGitHub function', () => {
    expect(intern.getSchool()).toBe("UofU");
});

test('gets role via getRole function', () => {
    expect(intern.getRole()).toBe("Intern");
});