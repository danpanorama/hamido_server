const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const getAllNweOrders = async (req, res, next) => {
try {
  
  
  const getUserOrders = await orderSQL.selectNewOrders();
  res.json({orders:getUserOrders[0]})
  
 

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.getAllNweOrders = getAllNweOrders;
