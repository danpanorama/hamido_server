const authbcrypt = require("../../../auth/bcrypt");
const orderSQL = require("../../../models/orders/newOrder");


// this is create use rfunction

const newOrder = async (req, res, next) => { 
try {
  
  const date = new Date();
  const insertNewOrder = await orderSQL.insertNewOrder(
    req.body.user.users_info.userid,
    req.body.user.users_info.username,
    req.body.user.users_info.phone,
    req.body.cart.total_price);
   
for(let i = 0; i < req.body.cart.cart_List.length; i++){
  const insertPirootOrder = await orderSQL.insertNewPirootOrder(
    insertNewOrder[0].insertId,
    req.body.cart.cart_List[i].ServWayState,
    req.body.cart.cart_List[i].data.pname)
  
    for(let k = 0; k < req.body.cart.cart_List[i].SaladState.length; k++){
      const insertPirootSalads = await orderSQL.insertNewPirootSalads(
        req.body.cart.cart_List[i].SaladState[k],
        insertPirootOrder[0].insertId)
    }
}


 let userOrders = await orderSQL.getUserOrdersWhereUserId(req.body.user.users_info.userid)
res.json({msg:'order send wait for results',orders:userOrders[0]});

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה בהזמנה ',type:'bad'}}).status(500);
}
};

module.exports.newOrder = newOrder;
