var express = require('express');
var router = express.Router();
const insertServingWay = require('../controller/admin/servingway/insertservway')
const deleteServingWays = require('../controller/admin/servingway/deleteservway')
const selectall = require('../controller/admin/servingway/selectall')



router.get('/',selectall.selectAll, function(req, res, next) {});



router.post('/inseretservway',insertServingWay.inseretServ, function(req, res, next) {});
router.post('/remove',deleteServingWays.deleteServingWay, function(req, res, next) {});




module.exports = router;
