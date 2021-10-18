'use strict';
const express = require('express');
const app = express();
const home = require('./routes/home.js');
const port = process.env.PORT || 8089;

app.get('/', home);

app.listen(port);
console.log('Up and running at 8089');