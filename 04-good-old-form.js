/*
    Forms are important. This exercise will teach you how to process the traditional (non-AJAX) web form.

    Write a route ('/form') that processes HTML form input
    (<form><input name="str"/></form>) and prints the value of str backwards.
*/

'use strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    const reversedString = req.body.str.split('').reverse().join('');
    res.end(reversedString);
});

app.listen(port);