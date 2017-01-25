/*
    Create an Express.js app with a home page rendered by the Pug template engine.

    The home page should respond to /home.

    The view should show the current date using 'new Date.toDateString()'.

    We use 'toDateString()' to simply return the date in a human-readable format
    without the time.
*/

'use strict';

const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');

const port = process.argv[2];

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port);