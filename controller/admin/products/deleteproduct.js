const mysql = require("../../../models/admin/products");



const deleteProduct = async (req, res, next) => {
    try {
      let deleteProduct = await mysql.deleteProducts(req.body.id)
      if(deleteProduct[0].affectedRows > 0){
        res.json({data:req.body,msg:{msg:'הצלחת להסיר מוצר הגשה מהתפריט',type:'good'}})

      }else{
        res.json({err:{msg:'   שום דבר לא השתנה',type:'bad'}})

      }

    } catch (e) {
        res.json({
            err:{msg:e.message,type:'bad'}
        }).status(500);
    }
};

module.exports.deleteProduct = deleteProduct;