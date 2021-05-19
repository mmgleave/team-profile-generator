const fs = require('fs');
const generatePage = require('./src/generatePage.js')

const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

fs.writeFile('./dist/team.html', generatePage(name, id, email), err => {
    if(err) throw new Error(err);
    console.log("html doc created successfully");
});