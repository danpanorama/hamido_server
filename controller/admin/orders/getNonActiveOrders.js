
const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const getNonActiveOrders = async (req, res, next) => {
try {
  
  
  const getUserOrders = await orderSQL.selectAllNoneActive();
  res.json({orders:getUserOrders[0]})
  
 

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.getNonActiveOrders = getNonActiveOrders;
