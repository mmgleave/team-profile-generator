const fs = require('fs');
const generatePage = require('./src/generatePage.js')

const inquirer = require('inquirer');

// lib requires
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const { existsTypeAnnotation } = require('@babel/types');

// empty employees array
const employeesArray = [];

// prompt for team manager input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Team Manager Name: ',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your Team Manager name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Employee ID: ',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your Employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email Address: ',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number: ',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your office number!');
            return false;
          }
        }
      }
    ]);
};

// prompt for choice to add to team 
const promptAddToTeam = () => {    
    return inquirer.prompt({
        type: 'list',
        name: 'addEmployee',
        message: 'Choose type of employee to add (or choose None to exit.',
        choices: ['Engineer', 'Intern', 'None']
    })
};

// prompt for employee basic info
const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Employee Name: ',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                  return true;
                } else {
                  console.log('Please enter an employee name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Employee ID: ',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                  return true;
                } else {
                  console.log('Please enter an employee ID!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Employee Email: ',
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                  return true;
                } else {
                  console.log('Please enter an employee email address!');
                  return false;
                }
            }
        }
    ]);
};

// prompt for engineer info
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username: '
        }
    ]);
};

// prompt for intern info
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'School: '
        }
    ]);
};

// using choice from promptAddToTeam prompt for employee data
const promptForEmployeeInfo = (employeeType) => {
    switch(employeeType){
        case 'Engineer':
            console.log('Engineer chosen');            promptEmployee();
            promptEmployee();
            promptEngineer();
            break;
        case 'Intern':
            console.log('Intern chosen');
            promptEmployee();
            promptIntern();
            break;
        case 'None':
            console.log('Exit team profile generator')
            // exit();
            break;
    };   
}

promptUser()
    .then(promptAddToTeam)
    .then(answer => {
        promptForEmployeeInfo(answer.addEmployee);
    })

// ('Add Employee', 
// 'Add Intern', 
// 'Add Manager', 
// 'End Team Profile Generator')
// add switch for result (by 'name')
// switch('addEmployee') case 'Engineer'; createEngineer(); break; etc.

// end add to array if user chooses no

// add employee functions
// prompt for basic employee information
// prompt for specialized information
// push to employees array

// prompt for choice to add to team

// create html from array information
// hard coded css





// promptUser()
//     .then(userInput => console.log(userInput))
//     .then(promptBuildTeam)
//     .then(promptEmployee)
//     .then(employeeInput => console.log(employeeInput));

// // fs.writeFile('./dist/team.html', fileContent, err => {
// //     if(err) throw new Error(err);
// //     console.log("html doc created successfully");
// // });