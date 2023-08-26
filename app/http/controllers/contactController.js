
function contactController() {

  return {
    async contact(req, resp) {
    
     resp.render("contact");

    },

    // async updateProfile(req, resp) {
    //   const employeesdel= await profile.findByIdAndUpdate(req.params.id, req.body)
    // let result= await profile.findById(req.params.id)
    // console.log("params id"+result)  
    // resp.send(result);
    // },
    
  }
}
module.exports = contactController;