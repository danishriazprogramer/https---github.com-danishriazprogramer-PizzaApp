const bcryptjs = require("bcryptjs")
const user = require("../../models/registerSchema");
function registerController() {

  return {
    async register(req, resp) {
            resp.render("register");
    },

    async registerApi(req, resp) {
      try {


        let pass = req.body.password;
        let salt = await bcryptjs.genSalt(10);
        console.log(salt)
        let hash = await bcryptjs.hash(pass, salt)
        console.log(hash)
        const regiseterData = new user({
          name: req.body.name,
          email: req.body.email,
          password: hash
        })
    
    
        const userdata = await regiseterData.save();
        console.log("ok ha sub")
    
        resp.render("login")         
    
      } catch (error) {
         console.log(error)
      }
    
    },
    
  }
}
module.exports = registerController;