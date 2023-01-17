const mysql = require("../../../models/admin/menu/menu");



const insertMenu = async (req, res, next) => {
    try {



        let servid = JSON.parse(req.body.servway);
        let productid = JSON.parse(req.body.mname);



     

        let checkIfProductExist = await mysql.selectProductBynameAndServWay(productid.id,servid.id)
        if(checkIfProductExist[0].length > 0){
            return res.json({msg:{msg:'כבר יש לך מנה כזאת עם אותו שם ואותה צורת הגשה',type:'bad'}})
        }else{
       
         


             ins = await mysql.insertNewMenuItem(
                productid.id,
                servid.id,
                req.body.mprice,
                req.body.mimg,
                req.body.mactive,
                req.body.sumsalads,
                servid.name,
                productid.name)

        }
        req.body.mid = ins[0].insertId
        res.json({data:req.body,msg:{msg:'הצלחת להוסיף מנה חדשה',type:'good'}})

    } catch (e) {
        console.log(e)
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.insertMenu = insertMenu;