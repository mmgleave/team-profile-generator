const fs = require('fs'); 

const generatePage = (name, id, email) => {
    return `
    <!DOCTYPE html>
    <html lang="en"
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile</title>
        </head>
    
        <body>
        </body>
    </html>
    `;
};

module.exports = generatePage;