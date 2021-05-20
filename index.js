// require fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// require src (generate html functions)
const generateCards = require('./src/generateCards.js')
const generateHtml = require('./src/generateHtml.js')

// requires for each employee type
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateCards = require('./src/generateCards.js');

// empty employees array
const employeesArray = [];

// team manager inquirer prompts
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Team Manager Name: ',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter team manager name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID: ',
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address: ',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number: ',
            validate: officeNumberInput => {
                if(officeNumberInput){
                    return true;
                } else {
                    console.log('Please enter office number.');
                    return false;
                }
            }
        }
    ])
};

// add new manager and add to array
const addNewManager = (managerData) => {
    let newManager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
    );
    employeesArray.push(newManager);
};

// add new engineer and add to array
const addNewEngineer = (engineerData) => {
    let newEngineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
    );
    employeesArray.push(newEngineer);
    init();
};

// add new intern and add to array
const addNewIntern = (internData) => {
    let newIntern = new Intern (
        internData.name,
        internData.id,
        internData.email,
        internData.school
    );
    employeesArray.push(newIntern);
    init();
};

// engineer inquirer prompts
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer Name: ',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter engineer name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer Employee ID: ',
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter engineer employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer Email Address: ',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter engineer email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Engineer GitHub Username: ',
            validate: githubUsernameInput => {
                if(githubUsernameInput){
                    return true;
                } else {
                    console.log('Please enter engineer github username.');
                    return false;
                }
            }
        }
    ]);
};

// intern inquirer prompts
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name: ',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please enter intern name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Intern Employee ID: ',
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter intern employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern Email Address: ',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter intern email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern School: ',
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                } else {
                    console.log('Please enter intern school.');
                    return false;
                }
            }
        }
    ]);
};

// prompt for add employee or end application
const addOrEnd = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addOrEnd',
            message: 'Would you like to add a new employee?',
            choices: ['Engineer', 'Intern', 'Finished'],
            default: 'Finished'
        }
    ])
};

// write to file using file content
const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/teamProfile.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'teamProfile.html file created successfully'
            });
        });
    });
};

// verify add or end application and start new prompts if add
const verifyAdd = (choice) => {
    if(choice === 'Finished'){
        console.log('Finished adding employees.')
        return employeesArray;
    } else if(choice === 'Engineer'){
        promptEngineer()
        .then(engineerData => {
            addNewEngineer(engineerData)
        })
    } else if(choice === 'Intern'){
        promptIntern()
        .then(internData => {
            addNewIntern(internData)
        })
    }
};


const init = () => {
    addOrEnd()
        .then(response => {
            return verifyAdd(response.addOrEnd)
        })
        .then(response => {
            return sortData(response)
        })
        .then(response => {
            console.log(response);
        })
        .then(response => {
            return generateCards(response)
        })
        .then(response => {
            console.log(response)
        })
        // .then(response => {
        //     return generateHtml(response);
        // })
        // .then(fileContent => {
        //     return writeToFile(fileContent);
        // })
};

promptManager()
        .then(managerData => {
            return addNewManager(managerData)
        })
        .then(init)
        .catch(err => {
            console.log(err);
        })