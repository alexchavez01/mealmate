// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulate a database
const users = [];

// Routes
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password }); // In production, NEVER store plain-text passwords.
    res.json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
