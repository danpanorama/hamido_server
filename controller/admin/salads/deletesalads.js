const mysql = require("../../../models/admin/salads");



const deleteSalad = async (req, res, next) => {
    try {
      let deleteProduct = await mysql.deleteSalad(req.body.id)
      if(deleteProduct.affectedRows > 0){
        res.json({data:req.body,msg:{msg:'הצלחת להסיר סלט מהתפריט',type:'good'}})

      }else{
        res.json({err:{msg:'   שום דבר לא השתנה',type:'bad'}})

      }

    } catch (e) {
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.deleteSalad = deleteSalad;