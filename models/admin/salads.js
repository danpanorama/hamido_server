
const pool = require("../mysql");


const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.salads `);
  };
  const selectAllActive = () => {
    return pool.execute(`SELECT * FROM hamido.salads where sactive = 1 `);
  };
  const selectAllByName = (name) => {
    return pool.execute(`SELECT * FROM hamido.salads where sname = ?`,[name]);
  };
  const insertNewSalads = (name,img,active) => {
    return pool.execute(
      `INSERT INTO salads 
      (sname,simg,sactive) 
      VALUES 
      (?,?,?)`,
      [name,img,active]
    );
  };
 const updateSaladsActive = (active,id) => {
    return pool.execute(`UPDATE hamido.salads 
    SET sactive = ?
    WHERE sid = ?`,[active,id]);
  };

  const updateSaladsPrice = (price,id) => {
    return pool.execute(`UPDATE hamido.salads 
    SET sprice = ?
    WHERE sid = ?`,[price,id]);
  };
  const updateSaladsImage = (img,id) => {
    return pool.execute(`UPDATE hamido.salads 
    SET simg = ?
    WHERE sid = ?`,[img,id]);
  };

  const deleteSalad = (id) => {
    return pool.execute(`DELETE FROM hamido.salads WHERE sid=? `,[id]);
  };

  
  module.exports.insertNewSalads = insertNewSalads
  module.exports.selectAll = selectAll 
   module.exports.updateSaladsActive = updateSaladsActive
   module.exports.updateSaladsPrice = updateSaladsPrice
   module.exports.updateSaladsImage = updateSaladsImage
   module.exports.deleteSalad = deleteSalad
   module.exports.selectAllByName = selectAllByName
   module.exports.selectAllActive = selectAllActive

   
   