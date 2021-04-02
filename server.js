const express = require('express'); // search and get access for express library
const app = express(); // creates an instance of the express constructor

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
];

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        succes: true,
        message: 'got one user',
        user: req.params.id
    });
});

// server listener
app.listen(8000, () => {
    console.log("Server is running");
});