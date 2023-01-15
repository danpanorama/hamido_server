var express = require('express');
var router = express.Router();
const insertMenuItem = require('../controller/admin/menu/inseretmenuitem')
const deleteProduct = require('../controller/admin/menu/deleteProduct')
const selectall = require('../controller/admin/menu/selectall')



router.get('/',selectall.selectAll, function(req, res, next) {});
router.get('/menubyid', function(req, res, next) {});



router.post('/inseretitem',insertMenuItem.insertProduct, function(req, res, next) {});
router.post('/deleteitem',deleteProduct.deleteProducts, function(req, res, next) {});




module.exports = router;
