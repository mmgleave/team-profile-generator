const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer("Michelle", "12345", "test@gmail.com", "mmgleave")

test('creates new engineer object', () => {
    expect(typeof(engineer)).toBe("object");
});

test('sets github username with Engineer cosntructor', () => {
    expect(engineer.github).toBe("mmgleave");
});

test('gets name via getName function', () => {
    expect(engineer.getName()).toBe("Michelle");
});

test('gets id via getId function', () => {
    expect(engineer.getId()).toBe("12345");
});

test('gets email via getEmail function', () => {
    expect(engineer.getEmail()).toBe("test@gmail.com");
});

test('gets github username via getGitHub function', () => {
    expect(engineer.getGitHub()).toBe("mmgleave");
});

test('gets role via getRole function', () => {
    expect(engineer.getRole()).toBe("Engineer");
});