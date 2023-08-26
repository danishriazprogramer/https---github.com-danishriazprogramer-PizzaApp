const  loginController= require("../app/http/controllers/loginController");
const  registerController= require("../app/http/controllers/registerController");
const  baseController= require("../app/http/controllers/baseController");
const  menuController= require("../app/http/controllers/menuController");
const  blogController= require("../app/http/controllers/blogController");
const  aboutController = require("../app/http/controllers/aboutController");
const  servicesController= require("../app/http/controllers/servicesController.js");
const  contactController= require("../app/http/controllers/contactController");
const  cartController= require("../app/http/controllers/cartController");
const  addToCartController= require("../app/http/controllers/addToCartController");
const  sizePricingController = require("../app/http/controllers/sizePricingController");
const  addToCartTypeProductController = require("../app/http/controllers/addToCartTypeProductController");




function initRoute(app){
    //Profile Controller
    app.get("/login", loginController().login)
    app.post('/loginApi',loginController().loginApi)
   
    
    app.get("/register", registerController().register)
    app.post("/registerApi", registerController().registerApi)

    app.get("/", baseController().base)
    app.get("/index", baseController().index)
    app.get("/menu", menuController().menu)
    app.get("/blog", blogController().blog)
    app.get("/about", aboutController().about)
    app.get("/services", servicesController().services)
    app.get("/contact", contactController().contact)
    app.get("/cart", cartController().cart)
    app.post("/addToCart", addToCartController().addToCart)
    app.get("/cartdelect", addToCartController().cartdelect)
    app.post("/sizePricing", sizePricingController().sizePricing)
    app.post("/sizePricing", sizePricingController().addToCartTypeProduct)
    app.post("/addToCartTypeProduct",addToCartTypeProductController().addToCartTypeProduct)
    app.post("/payment", cartController().stripIntegration)
}

module.exports = initRoute;