const express = require('express');
const app = express();
const port = 5001;

// Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { firstName, lastName } = req.body;
  const fullName = `${firstName} ${lastName}`;
  res.send(`<h1>Hello, ${fullName}!</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
