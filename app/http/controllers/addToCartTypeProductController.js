

const product = require("../../models/productSchema")
const allProduct = require("../../models/allProductSchema")

function addToCartTypeProductController() {

  return {
    async addToCartTypeProduct(req, resp) {

        console.log(req.body.ProductId)
  let orderProduct = await allProduct.findById(req.body.ProductId);






  console.log("the sesstion is working")

  let productPrice = orderProduct.price;

  if (!req.session.cart) {
    req.session.cart = {
      items: {},
      totalQty: 0,
      totalPrice: 0
    }
  }
  let cart = req.session.cart

  if (!cart.items[orderProduct.id]) {
    cart.items[orderProduct.id] = {
      item: orderProduct,
      singlePrice: productPrice,
      qty: 1
    }
    cart.totalQty = cart.totalQty + 1
    cart.totalPrice = cart.totalPrice + productPrice
    console.log(cart.totalPrice)
  } else {
    cart.items[orderProduct.id].qty = cart.items[orderProduct.id].qty + 1
    cart.totalQty = cart.totalQty + 1
    cart.totalPrice = cart.totalPrice + productPrice
  }



  req.session.save(err => {
    if (err) {
      console.log(err);
    } else {



    }
  });
  console.log(req.session)

  resp.status(201).json({ isAdded: true, abc: "123",  totalQty:req.session.cart.totalQty });


    },


  }
}
module.exports = addToCartTypeProductController;