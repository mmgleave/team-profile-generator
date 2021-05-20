const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

const employee = new Employee("Michelle", "12345", "test@gmail.com")

test('creates new employee object', () => {
    expect(typeof(employee)).toBe("object");
});

test('sets name with Employee cosntructor', () => {
    expect(employee.name).toBe("Michelle");
});

test('sets id with Employee cosntructor', () => {
    expect(employee.id).toBe("12345");
});

test('sets email with Employee cosntructor', () => {
    expect(employee.email).toBe("test@gmail.com");
});

test('gets name via getName function', () => {
    expect(employee.getName()).toBe("Michelle");
});

test('gets id via getId function', () => {
    expect(employee.getId()).toBe("12345");
});

test('gets email via getEmail function', () => {
    expect(employee.getEmail()).toBe("test@gmail.com");
});

test('gets role via getRole function', () => {
    expect(employee.getRole()).toBe("Employee");
});