const mysql = require("../../../models/admin/products");



const insertProduct = async (req, res, next) => {
    try {
        let checkIfProductExist = await mysql.selectByName(req.body.pname)
        if(checkIfProductExist[0].length > 0){
            return res.json({err:{msg:'כבר יש לך צורת מוצר כזה עם אותו שם   ',type:'bad'}})
        }else{
             ins = await mysql.insertNewProduct(req.body.pname,req.body.pprice,req.body.pimg,req.body.pactive)

        }
        req.body.pid = ins[0].insertId
        res.json({data:req.body,msg:{msg:'הצלחת להוסיף מוצר הגשה חדשה',type:'good'}})

    } catch (e) {
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.insertProduct = insertProduct;