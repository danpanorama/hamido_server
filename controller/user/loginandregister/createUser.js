const hapijoiCreate = require("../../../auth/joi");
const authbcrypt = require("../../../auth/bcrypt");
const users = require("../../../models/user/register");
const jwt = require("../../../auth/jwt");

// this is create use rfunction

const createNewAccount = async (req, res, next) => {
try {
  
  const date = new Date();

  let CheckingUserName = await users.selectUserByName(req.body.username);

  if (CheckingUserName[0].length > 0) {
  return res.json({msg:{msg:'שם משתמש כבר תפוס',type:'bad'}});
  }
  // let checkingUserEmail = await users.selectUserByEmail(req.body.email);
  // if (checkingUserEmail[0].length > 0) {
  // return res.json({msg:{msg:' אימייל כבר קיים במערכת',type:'bad'}});
  // }
  

  
  let hash = await authbcrypt.hashPassport(req.body.pass);
  let token = await jwt.makeToken({ hash: hash });

  let insertToBigBase = await users.insertNewUser(
    req.body.username,
    hash,
    req.body.phone,
  );

  if (insertToBigBase) {
   
     let user = req.body
     user.userid = insertToBigBase[0].insertId
    res.json({
        userInfo:user
        ,token:token
        ,remember:req.body.remember});
  }

} catch (e) {
  console.log(e)
  res.json({msg:{msg:'יש בעיה ביצירת משתמש',type:'bad'}}).status(500);
}
};

module.exports.createNewAccount = createNewAccount;
