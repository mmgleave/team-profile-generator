const cardsArray = [];

const generateCards = (employeeData) => {
    for(i=0; i<employeeData.length; i++) {
        switch(employeeData[i].getRole()){
            case 'Manager':
                createManagerCard(employeeData[i]);
            case 'Engineer':
                createEngineerCard(employeeData[i]);
            case 'Intern':
                createInternCard(employeeData[i]);
        }
    }
    return cardsArray;
};

const createManagerCard = (employee) => {
    let newCard = 
    `
<div class="card m-2 bg-light col-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-info">${employee.name}</h5>
        <p class="card-subtitle mb-2 text-muted">Manager  (ID: ${employee.id})</p>
        <a href="mailto:${employee.email}" class="card-link m-2">${employee.email}</a></br>
        <p class="m-2">Office Number: ${employee.officeNumber}</a>
    </div>
</div>
    `
    cardsArray.push(newCard);
};

const createEngineerCard = (employee) => {
    let newCard = 
    `
<div class="card m-2 bg-light col-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-info">${employee.name}</h5>
        <p class="card-subtitle mb-2 text-muted">Engineer (ID: ${employee.id})</p>
        <a href="mailto:${employee.email}" class="card-link m-2">${employee.email}</a></br>
        <a href="http://github.com/${employee.github}" class="card-link m-2">GitHub</a>
    </div>
</div>
    `
    cardsArray.push(newCard);
};

const createInternCard = (employee) => {
    let newCard = 
    `
<div class="card m-2 bg-light col-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-info">${employee.name}</h5>
        <p class="card-subtitle mb-2 text-muted">Intern (ID: ${employee.id})</p>
        <a href="mailto:${employee.email}" class="card-link m-2">${employee.email}</a></br>
        <p class="m-2">School: ${employee.school}</a>
    </div>
</div>
    `
    cardsArray.push(newCard);
};

module.exports = generateCards;

