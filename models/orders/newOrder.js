const pool = require("../mysql");


const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.orders `);
};
const selectAllActive = () => {
    return pool.execute(`SELECT * FROM hamido.orders where activeorder = 1  && orders.usertake = 0 `);
};

const selectNewOrders = () => {
    return pool.execute(`SELECT * FROM hamido.orders where  activeorder  >=0  && orders.usertake = 0    `);
};




const selectAllNoneActive = () => {
    return pool.execute(` SELECT *,GROUP_CONCAT(saladspiroot.saladname) AS salads
    FROM orders
    INNER JOIN pirootorder
    ON orders.orderid = pirootorder.orderid
    INNER JOIN saladspiroot
  ON pirootorder.idpiroot = saladspiroot.pirootorderid
  where orders.activeorder = 1 || orders.activeorder = 0 || orders.activeorder = 2
  && orders.usertake = 0
  group by pirootorder.idpiroot
    
   `);
};

const insertNewOrder = (userid,usename,phone, price) => {
    return pool.execute(
        `INSERT INTO orders 
    (userid,username,phone,price,usersee,activeorder,usertake) 
    VALUES 
    (?,?,?,?,0,0,0)`,
        [userid,usename,phone, price]
    );
};
const usersee = (id) => {
    return pool.execute(`UPDATE hamido.orders 
    SET usersee = 1
    WHERE orderid = ?`,[id]);
};
const usertake = (id) => {
    return pool.execute(`UPDATE hamido.orders 
    SET usertake = 1
    WHERE orderid = ?`,[id]);
};
const acceptOeder = (orderid) => {
    return pool.execute(`UPDATE hamido.orders 
    SET activeorder = 1
    WHERE orderid = ?`, [orderid]);
};
const orderIsReady = (order) => {
    return pool.execute(`UPDATE hamido.orders 
    SET activeorder = 2
    WHERE orderid = ?`, [order]);
};
const deniedOeder = (orderid) => {
    return pool.execute(`UPDATE hamido.orders 
        SET activeorder = null
        WHERE orderid = ?`, [orderid]);
};

const insertNewPirootOrder = (orderid, servway,product) => {
    return pool.execute(
        `INSERT INTO pirootorder 
            (orderid,servway,product) 
            VALUES 
            (?,?,?)`,
        [orderid, servway,product]
    );
};
const insertNewPirootSalads = ( salad,pirootorderid) => {
    return pool.execute(
        `INSERT INTO saladspiroot 
                (saladname,pirootorderid) 
                VALUES 
                (?,?)`,
        [ salad,pirootorderid]
    );
};


const getUserOrdersWhereUserId = ( id) => {
    return pool.execute(
        `SELECT *
        FROM orders
        INNER JOIN pirootorder
        ON orders.orderid = pirootorder.orderid 
        where userid = ? && orders.usersee = 0 && orders.usertake = 0  group by orders.orderid`,
        [ id]
    );
};


module.exports.insertNewPirootSalads = insertNewPirootSalads
module.exports.usersee = usersee


module.exports.orderIsReady = orderIsReady

module.exports.insertNewOrder = insertNewOrder
module.exports.selectAll = selectAll
module.exports.acceptOeder = acceptOeder
module.exports.deniedOeder = deniedOeder
module.exports.insertNewPirootOrder = insertNewPirootOrder

module.exports.selectAllActive = selectAllActive
module.exports.selectAllNoneActive = selectAllNoneActive
module.exports.getUserOrdersWhereUserId = getUserOrdersWhereUserId
module.exports.selectNewOrders = selectNewOrders


module.exports.usertake = usertake

