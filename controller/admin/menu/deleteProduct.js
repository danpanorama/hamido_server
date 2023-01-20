const mysql = require("../../../models/admin/menu/menu");



const deleteProducts = async (req, res, next) => {
    try {
      let deleteProduct = await mysql.deleteMenuItem(req.body.id)
      if(deleteProduct[0].affectedRows > 0){
        res.json({data:req.body,msg:{msg:'הצלחת להסיר מנה מהתפריט',type:'good'}})

      }else{
        res.json({data:req.body,msg:{msg:'   שום דבר לא השתנה',type:'bad'}})

      }

    } catch (e) {
      console.log(e)
        res.json({
            msg:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.deleteProducts = deleteProducts;