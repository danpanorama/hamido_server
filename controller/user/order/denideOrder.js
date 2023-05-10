const authbcrypt = require("../../../auth/bcrypt");
const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const denideOrder = async (req, res, next) => {
try {
  
  
  const denideOrder = await orderSQL.deniedOeder(req.body.id);
  
 res.json({id:req.body.id})

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.denideOrder = denideOrder;
