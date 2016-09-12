var path=require('path');
var express = require('express');
var expressRestResource = require('express-rest-resource');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));


var screenDb = require('./db/screen');

app.use('/api/screen', expressRestResource({ db: screenDb }));
app.use('/show',require('./router/show'))
app.listen("3000");