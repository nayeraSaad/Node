var express = require('express');
var router = express.Router();
const user = require('../models/usermodel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find((err,users)=>{
    res.json(users);
  });
});
router.post('/send',(req,res,next)=>{
  let obj = user.create(req.body,function(err,user){
    res.json(user);
  });
});

module.exports = router;
