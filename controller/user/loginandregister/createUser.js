const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const users = require("../../models/sql/users");
const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");

// this is create use rfunction

const createNewAccount = async (req, res, next) => {
try {
  
  const date = new Date();
  localStorage.setItem("isRemember", req.body.remember);

  let CheckingUserName = await users.selectUserByName(req.body.name);

  if (CheckingUserName[0].length > 0) {
  return res.json({msg:{msg:'שם משתמש כבר תפוס',type:'bad'}});
  }
  let checkingUserEmail = await users.selectUserByEmail(req.body.email);
  if (checkingUserEmail[0].length > 0) {
  return res.json({msg:{msg:' אימייל כבר קיים במערכת',type:'bad'}});
  }
  

  
  let hash = await authbcrypt.hashPassport(req.body.password);
  let token = await jwt.makeToken({ hash: hash });

  let insertToBigBase = await users.insertNewUser(
    req.body.name,
    hash,
    req.body.email,
    date,
    req.body.phone,
    req.body.address
  );

  if (insertToBigBase) {
    res.json({
        msg:{msg:'הצלחת ליצור משתמש חדש',type:'bad'},
         id:insertToBigBase.insertId
        ,userInfo:req.body
        ,token:token
        ,remember:req.body.remember});
  }

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה ביצירת משתמש',type:'bad'}}).status(500);
}
};

module.exports.createNewAccount = createNewAccount;
