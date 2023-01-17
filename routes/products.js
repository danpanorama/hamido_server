var express = require('express');
var router = express.Router();
const insertProducts = require('../controller/admin/products/insertproduct')
const deleteProduct = require('../controller/admin/products/deleteproduct')
const selectall = require('../controller/admin/products/selectall')



router.get('/',selectall.selectAll, function(req, res, next) {});



router.post('/inseretitem',insertProducts.insertProduct, function(req, res, next) {});
router.post('/remove',deleteProduct.deleteProduct, function(req, res, next) {});




module.exports = router;
