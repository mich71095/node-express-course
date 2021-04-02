const express = require('express'); // search and get access for express library
const app = express(); // creates an instance of the express constructor

// server listener
app.listen(8000, () => {
    console.log("Server is running");
})