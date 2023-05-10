var express = require('express');
var router = express.Router();
const newOrder = require('../controller/user/order/NewOrder')
const noneActiveOrders = require('../controller/user/order/noneActiveOrders');
const getUsersOrder = require('../controller/user/order/getUsersOrders')

const getAllNweOrders = require('../controller/admin/orders/getAllNweOrders')
const getNonActiveOrders = require('../controller/admin/orders/getNonActiveOrders')
const denideorder = require('../controller/user/order/denideOrder')
const acceptOrder = require('../controller/user/order/acceptOrder')
const userseeorder = require('../controller/user/order/userseeorder')
const usertakeorder = require('../controller/user/order/usertakeorder')

const orderIsReady = require('../controller/admin/orders/orderIsready')




router.post('/',newOrder.newOrder, function(req, res, next) {});

router.get('/nonactiveorders',noneActiveOrders.noneActiveOrders, function(req, res, next) {});

router.post('/deniedorder',denideorder.denideOrder, function(req, res, next) {});
router.post('/acceptorder',acceptOrder.acceptOrder, function(req, res, next) {});

router.post('/orderready',orderIsReady.orderIsready, function(req, res, next) {});

router.post('/usersee',userseeorder.userseeorder, function(req, res, next) {});
router.post('/usertake',usertakeorder.usertakeorder, function(req, res, next) {});

router.get('/orderclient',getUsersOrder.getUsersOrders, function(req, res, next) {});
router.get('/allneworders',getAllNweOrders.getAllNweOrders, function(req, res, next) {});

router.get('/nonactive',getNonActiveOrders.getNonActiveOrders, function(req, res, next) {});




module.exports = router;
