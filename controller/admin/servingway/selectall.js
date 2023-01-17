const mysql = require("../../../models/admin/servingway");



const selectAll = async (req, res, next) => {
    try {
    let all = await mysql.selectAll()
    res.json({all:all[0]})
    } catch (e) {
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.selectAll = selectAll;