const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
    // Your code here
    res.json(`${req.method} request received to get reviews`);

    // Show the user agent information in the terminal
    console.info(req.rawHeaders);

    // log our request to the terminal
    console.info(`${req.method} request received to get reviews`);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
    // Show the request method as JSON
    res.json(`${req.method} request received to add a review`);

    // Show the user agent information in the terminal
    console.info(req.rawHeaders);

    // Log our request to the terminal
    console.info(`${req.method} request received to add a review`);
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
    // Your code here
    res.json(`${req.method} request received to retrieve upvote count`);

    // Show the user agent information in the terminal
    console.info(req.rawHeaders);

    // Log our request to the terminal
    console.info(`${req.method} request received to retrieve upvote count`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
    // Show the request method as JSON
    res.json(`${req.method} request received to upvote`);

    // Show the user agent information in the terminal
    console.info(req.rawHeaders);

    // Log our request to the terminal
    console.info(`${req.method} request received to retrieve upvote count`);
});

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}!`));
