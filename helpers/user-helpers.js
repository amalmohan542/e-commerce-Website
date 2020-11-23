var db = require("../config/connection");
var collection = require("../config/collections");
let bcrypt = require("bcrypt");

module.exports = {
  doSignup: function (userData) {
    return new Promise(async (resolve, reject) => {
      userData.password = await bcrypt.hash(userData.password,10)
      console.log(userData)
      db.get()
        .collection(collection.USER_COLLECTION)
        .insertOne(userData)
        .then((res) => {
          resolve(res.ops[0])
        });
    });
  },
  doLogin: (userData) => {
    return new Promise(async (resolve, reject) => {
      let loginStatus = false;
      let response = {};
      let user = await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ email: userData.email });
        
      if (user) {
        bcrypt.compare(userData.password,user.password).then((status) => {
          if (status) {
            console.log("Login Sucess");
            response.user=user
            response.status=true
            resolve(response)
          } else {
            console.log("Wrong password");
            resolve({status:false})
          }
        });
      }else{
        console.log("User Not found");
        resolve({status:false})
      }
    });
  },
};
