const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Create or open the SQLite database
const db = new sqlite3.Database('database.db');

// Create a table for user registration data
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
  )
`);

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle user registration
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Insert user data into the database
  db.run(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Registration failed' });
      } else {
        res.json({ message: 'Registration successful' });
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
