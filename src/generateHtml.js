const generateHtml = (response) => {
    const cardsArray = [response];

    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <header>
        <div class="bg-secondary p-5">
            <h1 class="text-light">My Team Profile</h1>
        </div>
    </header>
    <main class="container">
        <div id="team-profile-section" class="row">
            ${cardsArray}
        </div>
    </main>    
</body>
</html>

    `;
};

module.exports = generateHtml;