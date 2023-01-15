
const pool = require("../mysql");


const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.extras `);
  };

  const selectByName = (name) => {
    return pool.execute(`SELECT * FROM hamido.extras where ename = ? `,[name]);
  };


  const insertNewExtra = (name,price,img,active) => {
    return pool.execute(
      `INSERT INTO extras 
      (ename,eprice,eimg,eactive) 
      VALUES 
      (?,?,?,?)`,
      [name,price,img,active]
    );
  };
 const updateExtrasActive = (active,id) => {
    return pool.execute(`UPDATE hamido.extras 
    SET eactive = ?
    WHERE eid = ?`,[active,id]);
  };

  const updateExtrasPrice = (price,id) => {
    return pool.execute(`UPDATE hamido.extras 
    SET eprice = ?
    WHERE eid = ?`,[price,id]);
  };
  const updateExtrasImage = (img,id) => {
    return pool.execute(`UPDATE hamido.extras 
    SET eimg = ?
    WHERE eid = ?`,[img,id]);
  };

  const deleteExtra = (id) => {
    return pool.execute(`DELETE FROM hamido.extras WHERE eid=? `,[id]);
  };

  
  module.exports.insertNewExtra = insertNewExtra
  module.exports.selectAll = selectAll 
   module.exports.updateExtrasActive = updateExtrasActive
   module.exports.updateExtrasPrice = updateExtrasPrice
   module.exports.updateExtrasImage = updateExtrasImage
   module.exports.deleteExtra = deleteExtra
   module.exports.selectByName = selectByName

   