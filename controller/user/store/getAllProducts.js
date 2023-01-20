const mysql = require("../../../models/admin/menu/menu");
const servingWays = require("../../../models/admin/servingway");



const selectStoreProduct = async (req, res, next) => {
    try {
    let allItems = await mysql.selectAllActive();
   let servingWaysList = await servingWays.selectAll()
   
    res.json({allItems:allItems[0],servingWaysList:servingWaysList[0]});
    } catch (e) {
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.selectStoreProduct = selectStoreProduct;