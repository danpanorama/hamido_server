const mysql = require("../../../models/admin/menu/menu");



const insertProduct = async (req, res, next) => {
    try {
        let checkIfProductExist = await mysql.selectProductBynameAndServWay(req.body.mealname,req.body.servingwayid)
        if(checkIfProductExist[0].length > 0){
            return res.json({msg:{msg:'כבר יש לך מנה כזאת עם אותו שם ואותה צורת הגשה',type:'bad'}})
        }else{
             ins = await mysql.insertNewMenuItem(req.body.name,req.body.servingwayid,req.body.price,req.body.img,req.body.active,req.body.sumextras)

        }
        req.body.mid = ins[0].insertId
        res.json({data:req.body,msg:{msg:'הצלחת להוסיף מנה חדשה',type:'good'}})

    } catch (e) {
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.insertProduct = insertProduct;