const mysql = require("../../../models/admin/servingway");



const deleteServingWay = async (req, res, next) => {
    try {
      let deleteProduct = await mysql.deleteServigWay(req.body.id)
      if(deleteProduct[0].affectedRows > 0){
        res.json({data:req.body,msg:{msg:'הצלחת להסיר צורת הגשה מהתפריט',type:'good'}})

      }else{
        res.json({err:{msg:'   שום דבר לא השתנה',type:'bad'}})

      }

    } catch (e) {
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.deleteServingWay = deleteServingWay;