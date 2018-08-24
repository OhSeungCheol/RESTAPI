var express = require('express');
var router = express.Router();

var Item = require('../../instance/item');
var Data = require('../../instance/data');
// DB Model

router.get('/', function(req, res, next) {
  console.log('Create action not supported GET method');
  res.render('main', { title: 'Express' });
});

//Create Action by POST Method
router.post('/', function(req, res, next) {
  var data = req.body.contents;
  // Get 'data' Parameter using body-parser module in POST Request 
    var newItem = new Item({contents:data});


    // Make new DB Model haved 'data' parameter
    
    newItem.save(function(error, data){
      if(error){
          console.log(error);
      }else{
          console.log('Saved!')
      }
    });
    // Save in MongoDB

    console.log(res.statusCode);
    res.json({status:res.statusCode});
    //res.render('ajax', { title: 'Express' });
    //Rendering main.jade
  });

module.exports = router;
