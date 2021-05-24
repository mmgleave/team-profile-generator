const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

const manager = new Manager("Michelle", "12345", "test@gmail.com", "12")

test('creates new manager object', () => {
    expect(typeof(manager)).toBe("object");
});

test('sets office number with Manager cosntructor', () => {
    expect(manager.officeNumber).toBe("12");
});

test('gets name via getName function', () => {
    expect(manager.getName()).toBe("Michelle");
});

test('gets id via getId function', () => {
    expect(manager.getId()).toBe("12345");
});

test('gets email via getEmail function', () => {
    expect(manager.getEmail()).toBe("test@gmail.com");
});

test('gets github username via getGitHub function', () => {
    expect(manager.getOfficeNumber()).toBe("12");
});

test('gets role via getRole function', () => {
    expect(manager.getRole()).toBe("Manager");
});