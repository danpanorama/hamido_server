
const pool = require("../mysql");


const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.servingway `);
  };

  const selectByName = (name) => {
    return pool.execute(`SELECT * FROM hamido.servingway where sername = ? `,[name]);
  };
  const insertNewServingWay = (name,price,img,active) => {
    return pool.execute(
      `INSERT INTO hamido.servingway 
      (sername,serprice,serimg,seractive) 
      VALUES 
      (?,?,?,?)`,
      [name,price,img,active]
    );
  };
 const updateServingActive = (active,id) => {
    return pool.execute(`UPDATE hamido.servingway 
    SET seractive = ?
    WHERE serid = ?`,[active,id]);
  };

  const updateServingPrice = (price,id) => {
    return pool.execute(`UPDATE hamido.servingway 
    SET serprice = ?
    WHERE serid = ?`,[price,id]);
  };
  const updateServingImage = (img,id) => {
    return pool.execute(`UPDATE hamido.servingway 
    SET serimg = ?
    WHERE serid = ?`,[img,id]);
  };

  const deleteServigWay = (id) => {
    return pool.execute(`DELETE FROM hamido.servingway WHERE serid=? `,[id]);
  };

  
  module.exports.insertNewServingWay = insertNewServingWay
  module.exports.selectAll = selectAll 
   module.exports.updateServingActive = updateServingActive
   module.exports.updateServingPrice = updateServingPrice
   module.exports.updateServingImage = updateServingImage
   module.exports.deleteServigWay = deleteServigWay

   module.exports.selectByName = selectByName