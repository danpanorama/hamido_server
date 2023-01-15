const mysql = require("../../../models/admin/extras");



const insertExtra = async (req, res, next) => {
    try {
        let checkIfProductExist = await mysql.selectByName(req.body.name)
        if(checkIfProductExist[0].length > 0){
            return res.json({err:{msg:'כבר יש לך תוספת כזאת עם אותו שם   ',type:'bad'}})
        }else{
             ins = await mysql.insertNewExtra(req.body.name,req.body.price,req.body.img,req.body.active)

        }
        req.body.mid = ins[0].insertId
        res.json({data:req.body,msg:{msg:'הצלחת להוסיף תוספת חדשה',type:'good'}})

    } catch (e) {
        console.log(e)
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.insertExtra = insertExtra;