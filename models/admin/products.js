
const pool = require("../mysql");


    const selectAll = () => {
    return pool.execute(`SELECT * FROM hamido.products `);
    };

    const selectByName = (name) => {
    return pool.execute(`SELECT * FROM hamido.products where pname = ? `,[name]);
    };
    const insertNewProduct = (name,price,img,active) => {
    return pool.execute(
    `INSERT INTO products 
    (pname,pprice,pimg,pactive) 
    VALUES 
    (?,?,?,?)`,
    [name,price,img,active]
    );
    };
    const updateExtrasActive = (active,id) => {
    return pool.execute(`UPDATE hamido.products 
    SET pactive = ?
    WHERE pid = ?`,[active,id]);
    };

    const updateExtrasPrice = (price,id) => {
    return pool.execute(`UPDATE hamido.products 
    SET price = ?
    WHERE pid = ?`,[price,id]);
    };
    const updateExtrasImage = (img,id) => {
    return pool.execute(`UPDATE hamido.products 
    SET pimg = ?
    WHERE pid = ?`,[img,id]);
    };

    const deleteProducts = (id) => {
    return pool.execute(`DELETE FROM hamido.products WHERE pid=? `,[id]);
    };

  
  module.exports.insertNewProduct = insertNewProduct
  module.exports.selectAll = selectAll 
   module.exports.updateExtrasActive = updateExtrasActive
   module.exports.updateExtrasPrice = updateExtrasPrice
   module.exports.updateExtrasImage = updateExtrasImage
   module.exports.deleteProducts = deleteProducts
   module.exports.selectByName = selectByName


   