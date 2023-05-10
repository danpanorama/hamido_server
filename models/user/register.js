const pool = require("../mysql");


const selectUserByEmail = (email) => {
  return pool.execute(`SELECT * FROM hamido.users WHERE email = ? `, [email]);
};

const selectUserByName = (name) => {
  return pool.execute(`SELECT * FROM hamido.users WHERE username = ? `, [name]);
};   

const selectUserByPasswordEmail = (password,email) => {
    return pool.execute(`SELECT * FROM hamido.users  WHERE userhash = ? AND email = ?`, [password,email]);
  };


const insertNewUser = (name, password, phone) => {
  return pool.execute(
    `INSERT INTO hamido.users 
    (username, userhash,phone) 
    VALUES 
    (?, ?, ?)`,
    [name, password, phone]
  );
};


const updateUser = (password, userName, email, phone, address, id) => {
  return pool.execute(
    `UPDATE hamido.users 
    SET password = ?,
    name =?,email =?,
    phone=?,address=?
    WHERE id = ? `,
    [password, userName, email, phone, address, id]
  );
};



const updateUserPassword = (pass,email) => {
  return pool.execute(
    `UPDATE hamido.users 
    SET password = ?
    WHERE email = ? `,
    [pass,email]
  );
};




module.exports.updateUserPassword = updateUserPassword;
module.exports.selectUserByPasswordEmail = selectUserByPasswordEmail;
module.exports.selectUserByEmail = selectUserByEmail;
module.exports.selectUserByName = selectUserByName;
module.exports.updateUser = updateUser;
module.exports.insertNewUser = insertNewUser;


