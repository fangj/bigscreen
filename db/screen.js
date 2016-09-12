var nedb = require('nedb');

var screenDb = new nedb({ filename: 'screenDb', autoload: true });
module.exports=screenDb;