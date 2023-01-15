var express = require('express');
var router = express.Router();
const insertExtra = require('../controller/admin/extras/insertextra')
const deleteExtra = require('../controller/admin/extras/deleteextra')
const selectall = require('../controller/admin/extras/selectall')



router.get('/',selectall.selectAll, function(req, res, next) {});



router.post('/inseretextra',insertExtra.insertExtra, function(req, res, next) {});
router.post('/deleteitem',deleteExtra.deleteExtra, function(req, res, next) {});




module.exports = router;
