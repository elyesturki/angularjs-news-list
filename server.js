'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let morgan = require('morgan');
let path = require('path');

let rootPath = path.join(__dirname + '/app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With, content-type, Authorization');
    next();
});

app.use(morgan('dev'));

app.use(express.static(rootPath));

app.get('*', function(req, res) {
    res.sendFile(path.join(rootPath + '/index.html'));
});

app.listen(8080);
console.log('AngularJS App is running on 8080');