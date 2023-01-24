const mysql = require("../../../models/admin/menu/menu");
const servingWays = require("../../../models/admin/servingway");
const salads = require("../../../models/admin/salads");



const selectStoreProduct = async (req, res, next) => {
    try {
    let allItems = await mysql.selectAll();
   let servingWaysList = await servingWays.selectAll()
   let saladslist = await salads.selectAll()
   
    res.json({allItems:allItems[0],servingWaysList:servingWaysList[0],saladslist:saladslist[0]});
    } catch (e) {
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.selectStoreProduct = selectStoreProduct;