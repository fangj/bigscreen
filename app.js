var path=require('path');
var express = require('express');
var expressRestResource = require('express-rest-resource');

var app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


var screenDb = require('./db/screen');

app.use('/api/screen', expressRestResource({ db: screenDb }));
app.use('/show',require('./router/show'));
require('react-restui/lib/server/uploadify')(app,'uploads'); //for upload_zone

app.listen("3000");