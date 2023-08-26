
const user = require("../../models/registerSchema");
const bcryptjs = require("bcryptjs")
function loginController() {

  return {
    async login(req, resp) {
    
      resp.render("login");

    },

    async loginApi(req, resp) {
                 let password = req.body.password;
                const logindata = await user.findOne({ email: req.body.email })
                const daaa = await bcryptjs.compareSync(password, logindata.password)
                if (daaa) {
                    resp.redirect("/")
                } else {
                    resp.send("email password not match");
                }
    },
    
  }
}
module.exports = loginController;