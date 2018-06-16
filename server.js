const express = require('express');
// const news  = require('./playground/app.js');

var app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(3000);