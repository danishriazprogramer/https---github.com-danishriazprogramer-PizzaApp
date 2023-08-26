
const product = require("../../models/productSchema")

    
function addToCartController() {

  return {
    async addToCart(req, resp) {

      console.log(req.body.ProductId)
      let orderProduct = await product.findById(req.body.ProductId);
      let sizeData = req.body.selectedSizeName
      console.log(sizeData)
      let price;
      if (sizeData === "medium") {
        price = orderProduct.medium;
        console.log(price)
      } else if (sizeData === "small") {
        price = orderProduct.small;
        console.log(price)
      } else {
        price = orderProduct.large;
        console.log(price)
      }




      console.log("the sesstion is working")
      console.log(price)
      let productPrice = req.body.productPrice;

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
          singlePrice: price,
          qty: 1
        }
        cart.totalQty = cart.totalQty + 1
        cart.totalPrice = cart.totalPrice + price
        console.log(cart.totalPrice)
      } else {
        cart.items[orderProduct.id].qty = cart.items[orderProduct.id].qty + 1
        cart.totalQty = cart.totalQty + 1
        cart.totalPrice = cart.totalPrice + price
      }



      req.session.save(err => {
        if (err) {
          console.log(err);
        } else {



        }
      });



      console.log(req.session)


      resp.status(201).json({ isAdded: true, abc: "123", totalQty: req.session.cart.totalQty });




    },

    async cartdelect(req, resp) {

     
        // Retrieve session data
        const sessionData = req.session;
      
        // Access the order in session and update it
        if (sessionData) {
          // Make your changes to the order here
          let id="64356b792b4a99d6bbd9e555"
          sessionData.cart.items[id]=""; // For example, updating total amount
        
         resp.send(sessionData.cart.items)
         console.log(typeof(sessionData.cart.items))
         //console.log(sessionData.cart.items)
        }
      
        // Save the updated session
        sessionData.save((err) => {
          if (err) {
            console.error('Error saving session:', err);
          } else {
            console.log('Session updated successfully');
            //resp.redirect('/');
          }
          
        });
    
      
     
      
      
      
      
      
      
      

      
       
     
    

    },




  }
}
module.exports = addToCartController;