/*
    This exercise is about serving static assets like HTML files.
    There are many ways to do it, but we want you to apply static middleware to serve the file index.html.

    Please don't use ANY routes like app.get. ONLY static.
*/

'use strict';

const express = require('express');
const app = express();
const path = require('path');

const port = process.argv[2];
const filePath = process.argv[3];

app.use(express.static(filePath || path.join(__dirname, 'public')));

app.listen(port);