const mongoose = require("mongoose");
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var Publishable_Key = 'pk_test_51KWF45BWBJ6r3HzXRLFZq1Kizc0NHNvQKVf8bTq266MQCwbExKnTO5uPkMb0LkQ7J0TSRGU7DUkK7RB7FSe2RXYn00YIIFgKfK'
var Secret_Key = ' sk_test_51KWF45BWBJ6r3HzX1H4wLzzHxxULjT8w5JCPFleqkO6esptw1Wgol99vSRIffY7teXHCDsIv0MZQXSWwCvTJlEz300PT3FMl4o'
 
const stripe = require('stripe')(Secret_Key)

function cartController() {

  return {
    async cart(req, resp) {


      if (req.session.cart) {

        const fromDate = moment();
        const toDate = moment().add(10, 'years');
        const range = moment().range(fromDate, toDate);

        const years = Array.from(range.by('year')).map(m => m.year());
        const months = moment.monthsShort();
        console.log("the mongth is :",months)
        resp.render("cart", { cart: req.session.cart.items, cartData: req.session.cart, data: 1,m:months,y:years, key: Publishable_Key })
        console.log("total qunaty is not 0");



      


      }
      else {
        resp.render("cart", { data: 0 })
        console.log("total qunaty is  0")
      }
    },
  
    async stripIntegration(req, resp) {



     
      
       
     
       
    
       
          // Moreover you can take more details from user
          // like Address, Name, etc from form
          stripe.customers.create({
              email: req.body.stripeEmail,
              source: req.body.stripeToken,
              name: 'Gourav Hammad',
              address: {
                  line1: 'TC 9/4 Old MES colony',
                  postal_code: '452331',
                  city: 'Indore',
                  state: 'Madhya Pradesh',
                  country: 'India',
              }
          })
          .then((customer) => {
       
              return stripe.charges.create({
                  amount: 25000 * 100,     // Charging Rs 25
                  description: 'Web Development Product',
                  currency: 'INR',
                  customer: customer.id
              });
          })
          .then((charge) => {
              resp.send("Success")  // If no error occurs
          })
          .catch((err) => {
              resp.send(err)       // If some error occurs
          });
      
       
     
    },

  }
}


module.exports = cartController;