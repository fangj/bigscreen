var path=require('path');
var express = require('express');
var expressRestResource = require('express-rest-resource');
var nedb = require('nedb');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));


var screenDb = new nedb({ filename: 'screenDb', autoload: true });

app.use('/api/screen', expressRestResource({ db: screenDb }));

app.listen("3000");