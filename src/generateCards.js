const cardsArray = [];

const generateCards = (employeeData) => {
    employeeData.forEach(employee => {
        switch(employee.getRole()){
            case 'Manager':
                createManagerCard(employee);
                break;
            case 'Engineer':
                createEngineerCard(employee);
                break;
            case 'Intern':
                createInternCard(employee);
                break;
        }
    })
    return cardsArray;
};

const createManagerCard = (employee) => {
    let newCard = 
    `
<div class="card m-5 bg-light" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-info">${employee.name}</h5>
        <p class="card-subtitle mb-2 text-muted">Manager</p>
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
<div class="card m-5 bg-light" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-info">${employee.name}</h5>
        <p class="card-subtitle mb-2 text-muted">Engineer</p>
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
<div class="card m-5 bg-light" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-info">${employee.name}</h5>
        <p class="card-subtitle mb-2 text-muted">Engineer</p>
        <a href="mailto:${employee.email}" class="card-link m-2">${employee.email}</a></br>
        <p class="m-2">School: ${employee.school}</a>
    </div>
</div>
    `
    cardsArray.push(newCard);
};

module.exports = generateCards;