const mysql = require("../../../models/admin/servingway");



const inseretServ = async (req, res, next) => {
    try {
        let checkIfProductExist = await mysql.selectByName(req.body.sername)
        if(checkIfProductExist[0].length > 0){
            return res.json({err:{msg:'כבר יש לך צורת הגשה כזה עם אותו שם   ',type:'bad'}})
        }else{
             ins = await mysql.insertNewServingWay(req.body.sername,req.body.serprice,req.body.serimg,req.body.seractive)

        }
        req.body.serid = ins[0].insertId
        res.json({data:req.body,msg:{msg:'הצלחת להוסיף צורת הגשה חדשה',type:'good'}})

    } catch (e) { 
        console.log(e)
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.inseretServ = inseretServ;