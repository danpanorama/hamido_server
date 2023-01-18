const mysql = require("../../../models/admin/menu/menu");



const selectStoreProduct = async (req, res, next) => {
    try {
    let allItems = await mysql.selectAllActive();
    res.json({allItems:allItems[0]});
    } catch (e) {
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.selectStoreProduct = selectStoreProduct;