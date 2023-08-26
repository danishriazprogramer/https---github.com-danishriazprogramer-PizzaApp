
const blog = require("../../models/blogSchema");
const product = require("../../models/productSchema")
const allProduct = require("../../models/allProductSchema")
const pricing = require("../../models/pricingSchema")

function menuController() {

  return {
    async menu(req, resp) {
    
      const pizzas = await product.find();
      const allProductData = await allProduct.find();
      const menu = await product.find().limit(4);
      const menu2 = await product.find().limit(4).skip(4);
      let blogData = await blog.find()
      // resp.send(menu2)
    
      resp.render("menu", { pizzasData: pizzas, pricing: menu, pricing2: menu2, allProductData: allProductData, blog: blogData })

    },

    // async updateProfile(req, resp) {
    //   const employeesdel= await profile.findByIdAndUpdate(req.params.id, req.body)
    // let result= await profile.findById(req.params.id)
    // console.log("params id"+result)  
    // resp.send(result);
    // },
    
  }
}
module.exports = menuController;