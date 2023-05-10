var express = require('express');
var router = express.Router();
const Login = require('../controller/user/loginandregister/login')
const CreateUser = require('../controller/user/loginandregister/createUser')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',Login.Login, function(req, res, next) {
  
});

router.post('/createuser',CreateUser.createNewAccount, function(req, res, next) {
  
});
module.exports = router;
