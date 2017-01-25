/*
    Most of the times we're building RESTful API servers with JSON.

    Write a server that, when it receives a GET, reads a file, parses it to JSON,
    and responds with that content to the user.

    The server should respond to any GET that matches the /books resource path.
    As always, the port is passed in process.argv[2]. The file to read is passed
    in process.argv[3].
*/

'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

app.get('/books', (req, res) => {
    fs.readFile(file, (e, data) => {
        data = JSON.parse(data);
        res.json(data);
    });
});

app.listen(port);