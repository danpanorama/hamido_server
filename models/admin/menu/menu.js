
const pool = require("../../mysql");


const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.menu `);
  };
  const selectAllActive = () => {
    return pool.execute(`SELECT * FROM hamido.menu where mactive = 1 `,[]);
  };

  const selectProductBynameAndServWay = (name,servingwayid) => {
    return pool.execute(`SELECT * FROM hamido.menu where name = ? AND servingwayid = ? `,[name,servingwayid]);
  };

  
  const insertNewMenuItem = (portion,servingwayid,mprice,mimg,mactive,sumextra,servingway,productname) => {
    return pool.execute(
      `INSERT INTO menu 
      (name,servingwayid,mprice,mimg,mactive,sumextra,servingway,productname) 
      VALUES 
      (?,?,?,?,?,?,?,?)`,
      [portion,servingwayid,mprice,mimg,mactive,sumextra,servingway,productname]
    );
  };
  const updateMealSumExtras = (sumextra,id) => {
    return pool.execute(`UPDATE hamido.menu 
    SET sumextra = ?
    WHERE mid = ?`,[sumextra,id]);
  };
  
  const updateMeelActive = (active,id) => {
    return pool.execute(`UPDATE hamido.menu 
    SET mactive = ?
    WHERE mid = ?`,[active,id]);
  };
  const updateMealImage = (img,id) => {
    return pool.execute(`UPDATE hamido.menu 
    SET mimg = ?
    WHERE mid = ?`,[img,id]);
  };

  const updateMealPrice = (price,id) => {
    return pool.execute(`UPDATE hamido.menu 
    SET mprice = ?
    WHERE mid = ?`,[price,id]);
  };
  const updateServingwayid = (servway,id) => {
    return pool.execute(`UPDATE hamido.menu 
    SET servingwayid = ?
    WHERE mid = ?`,[servway,id]);
  };

  const updatePortion = (name,id) => {
    return pool.execute(`UPDATE hamido.menu 
    SET name = ?
    WHERE mid = ?`,[name,id]);
  };

module.exports.updatePortion = updatePortion
module.exports.updateMealSumExtras = updateMealSumExtras
module.exports.selectAll = selectAll 
module.exports.updateMeelActive = updateMeelActive
module.exports.updateServingwayid = updateServingwayid
module.exports.updateMealImage = updateMealImage
module.exports.updateMealPrice = updateMealPrice
module.exports.selectAllActive = selectAllActive
module.exports.insertNewMenuItem = insertNewMenuItem
module.exports.selectProductBynameAndServWay = selectProductBynameAndServWay


