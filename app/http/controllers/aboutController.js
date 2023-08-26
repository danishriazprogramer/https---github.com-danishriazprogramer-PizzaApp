
function aboutController() {

  return {
    async about(req, resp) {
    
         resp.render("about");

    },

    // async updateProfile(req, resp) {
    //   const employeesdel= await profile.findByIdAndUpdate(req.params.id, req.body)
    // let result= await profile.findById(req.params.id)
    // console.log("params id"+result)  
    // resp.send(result);
    // },
    
  }
}
module.exports = aboutController;