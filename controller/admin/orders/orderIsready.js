const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const orderIsready = async (req, res, next) => {
try {
  
  
  const getOrderReady = await orderSQL.orderIsReady(req.body.id);

  res.json({msg:'order is ready'})
  
 

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.orderIsready = orderIsready;
