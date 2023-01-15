
const pool = require("../../mysql");


const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.resturant `);
  };

 const updateResturantActive = (active) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET activeplace = ?
    WHERE resturantid = 1`,[active]);
  };
  const updateResturantAddress = (address) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET address = ?
    WHERE resturantid = 1`,[address]);
  };
  
  const updateResturantEmail = (email) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET email = ?
    WHERE resturantid = 1`,[email]);
  };
  const updateCloseHouers = (closetime) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET closehouers = ?
    WHERE resturantid = 1`,[closetime]);
  };

  const updateOpenHouers = (opentime) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET openhouers = ?
    WHERE resturantid = 1`,[opentime]);
  };
  const updateWorkDays = (days) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET workday = ?
    WHERE resturantid = 1`,[days]);
  };

  const updateName = (name) => {
    return pool.execute(`UPDATE hamido.resturant 
    SET name = ?
    WHERE resturantid = 1`,[name]);
  };

module.exports.updateName = updateName
module.exports.updateOpenHouers = updateOpenHouers
module.exports.selectAll = selectAll 
module.exports.updateResturantActive = updateResturantActive
module.exports.updateWorkDays = updateWorkDays
module.exports.updateCloseHouers = updateCloseHouers
module.exports.updateResturantAddress = updateResturantAddress
module.exports.updateResturantEmail = updateResturantEmail