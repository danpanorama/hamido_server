const authbcrypt = require("../../../auth/bcrypt");
const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const noneActiveOrders = async (req, res, next) => {
try {
  
  
  const getOrders = await orderSQL.selectAllNoneActive();
  
 

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.noneActiveOrders = noneActiveOrders;
