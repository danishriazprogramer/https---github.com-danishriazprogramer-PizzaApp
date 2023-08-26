
const blog = require("../../models/blogSchema");
function blogController() {

  return {
    async blog(req, resp) {

      let blogData = await blog.find().limit(6)
      let blogLength = await blog.find().count()
      console.log(blogLength)
      console.log(req.query.page)
      //resp.send(req.query.page)
      resp.render("blog", { blog: blogData, blogLength: blogLength })

    },


  }
}
module.exports = blogController;