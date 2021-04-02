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

// server listener
app.listen(8000, () => {
    console.log("Server is running");
});