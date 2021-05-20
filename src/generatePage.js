const fs = require('fs'); 

const generatePage = (employeeData) => {
    const employees = employeeData;

    return `
    <!DOCTYPE html>
    <html lang="en"
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team Profile</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
    
        <body>
        <header>
            <h2>My Team</h2>
        </header>
        <main>

        </main>
        </body>
    </html>
    `;
};

module.exports = generatePage;
