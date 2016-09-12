var express = require('express');
var router = express.Router();

var screenDb = require('../db/screen');

// define the home page route
router.get('/:screenIndex', function(req, res) {
    // res.send('screenIndex:'+req.params.screenIndex);
  var id=req.params.screenIndex;
  screenDb.findOne({_id:id},function(err,obj){
    if(obj.show=="url"){
      res.redirect(obj.url);
    }else{
      res.json(obj);
    };

  })
});

module.exports = router;