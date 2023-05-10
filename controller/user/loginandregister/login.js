const authBcrypt = require("../../../auth/bcrypt");
const users = require("../../../models/user/register");
const jwt = require("../../../auth/jwt");


// this is logg in function
const Login = async (req, res, next) => {

  if (req.body.name && req.body.pass) {
    try {
      let data = req.body
      let findUser = await users.selectUserByName(data.name);
      if (findUser[0].length > 0) {
        let checkpassword = await authBcrypt.checkPassword(
          req.body.pass,
          findUser[0][0].userhash
        );

        let checkTokens = await jwt.makeToken({
          hash: findUser[0][0].password,
        });


        if (checkpassword && checkTokens) {
          res.json({
            userInfo: findUser[0][0],
            remember: req.body.remember,
            token: checkTokens,
            number: findUser[0][0].id
          })

          return;
        } else {
          res.json({
            msg: { msg:"    שם או סיסמה לא נכונים " + e,type:'bad'}
          });
        } 
      } else {
        res.json({
          msg: { msg:" לא נמצא לקוח כזה ",type:'bad'}
        })
      }
    } catch(e) {
      console.log( e.message);
      res.json({
        msg: { msg:"ישנה בעיה בהתחברות  ",type:'bad'}
      });
    }
  } else {
    res.json({
      msg: { msg:"לא הכנסת מידע לאינפוט  " ,type:'bad'}
    });
  }
};


module.exports.Login = Login;