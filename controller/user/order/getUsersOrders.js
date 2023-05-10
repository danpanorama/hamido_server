const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const getUsersOrders = async (req, res, next) => {
try {
  
  
  const getUserOrdersByUserId = await orderSQL.getUserOrdersWhereUserId(req.query.id);
  res.json({cart_List:getUserOrdersByUserId[0]})
  
 

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.getUsersOrders = getUsersOrders;
