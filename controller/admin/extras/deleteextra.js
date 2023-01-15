const mysql = require("../../../models/admin/extras");



const deleteExtra = async (req, res, next) => {
    try {
      let deleteProduct = await mysql.deleteExtra(req.body.id)
      if(deleteProduct.affectedRows > 0){
        res.json({data:req.body,msg:{msg:'הצלחת להסיר מנה מהתפריט',type:'good'}})

      }else{
        res.json({err:{msg:'   שום דבר לא השתנה',type:'bad'}})

      }

    } catch (e) {
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.deleteExtra = deleteExtra;