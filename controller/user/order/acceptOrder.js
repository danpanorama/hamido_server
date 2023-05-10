const orderSQL = require("../../../models/orders/newOrder");

// this is create use rfunction

const acceptOrder = async (req, res, next) => {
try {
  
  
if(req.body.id){
  const acceptOrder = await orderSQL.acceptOeder(req.body.id);
  res.json({msg:'ff'});
}else{
  return res.json({msg:'nothing change'})
}

 

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.acceptOrder = acceptOrder;
