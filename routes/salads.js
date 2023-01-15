var express = require('express');
var router = express.Router();
const insertSalads = require('../controller/admin/salads/insertsalad')
const deleteSalads = require('../controller/admin/salads/deletesalads')
const selectall = require('../controller/admin/salads/selectall')



router.get('/',selectall.selectAll, function(req, res, next) {});



router.post('/inseretsalads',insertSalads.insertSalads, function(req, res, next) {});
router.post('/deleteitem',deleteSalads.deleteSalad, function(req, res, next) {});




module.exports = router;
