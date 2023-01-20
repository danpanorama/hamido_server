var express = require('express');
var router = express.Router();
const getAllProducts = require('../controller/user/store/getAllProducts')



router.get('/',getAllProducts.selectStoreProduct, function(req, res, next) {});




module.exports = router;
