
const blog = require("../../models/blogSchema");
const product = require("../../models/productSchema")
const allProduct = require("../../models/allProductSchema")
const pricing = require("../../models/pricingSchema")

function baseController() {

  return {
    async base(req, resp) {


      const pizzas = await product.find();
      const allProductData = await allProduct.find();
      const menu = await product.find().limit(4);
      const menu2 = await product.find().limit(4).skip(4);
      let blogData = await blog.find()
      // resp.send(menu2)

      resp.render("index", { pizzasData: pizzas, pricing: menu, pricing2: menu2, allProductData: allProductData, blog: blogData })


    },

    async index(req, resp) {
      resp.redirect("/")
    },

  }
}
module.exports = baseController;