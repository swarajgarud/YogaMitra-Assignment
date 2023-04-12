//Implement a REST API endpoint using Node.js and Express.js that receives a JSON payload with a username and password and returns a JSON response indicating whether the provided credentials are valid or not.
//Ans:-
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Configure middleware to parse JSON payloads
app.use(bodyParser.json());
// Define a route for the authentication endpoint
app.post('/auth', (req, res) => {
// Extract the username and password from the request payload
  const { username, password } = req.body;
// Check if the provided credentials are valid
  if (username === 'valid_username' && password === 'valid_password') {
// If the credentials are valid, return a success message
    res.json({ message: 'Authentication successful' });
  } else {
// If the credentials are not valid, return an error message
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
