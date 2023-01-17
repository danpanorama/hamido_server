const mysql = require("../../../models/admin/salads");



const insertSalads = async (req, res, next) => {
    try {
        let checkIfProductExist = await mysql.selectAllByName(req.body.sname)
        if(checkIfProductExist[0].length > 0){
            return res.json({err:{msg:'כבר יש לך סלט כזה עם אותו שם   ',type:'bad'}})
        }else{
             ins = await mysql.insertNewSalads(req.body.sname,req.body.simg,req.body.sactive)

        }
        req.body.sid = ins[0].insertId
        res.json({data:req.body,msg:{msg:'הצלחת להוסיף סלט חדשה',type:'good'}})

    } catch (e) {
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.insertSalads = insertSalads;