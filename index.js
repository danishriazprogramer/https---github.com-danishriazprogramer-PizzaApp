const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
// const user = require("./registerSchema");
// const blog = require("./blogSchema");
// const product = require("./productSchema")
// const allProduct = require("./allProduct")
// const pricing = require("./pricingSchema")
const bcryptjs = require("bcryptjs")
const cookieparser = require("cookie-parser");
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;

app.use("/static", express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.set("view engine", "ejs");
app.set("views", "views")


 
const db= mongoose.connect("mongodb+srv://PizzaApp:UJ5KeEHn10mV1Fhm@cluster0.fzjs5cn.mongodb.net/PizzaApp")
  .then(() => console.log("connected"));

const sessionConnection = mongoose.connection.once('open', () => {
  console.log("connetion mongo for session");

})


//session 

const session = require('express-session');
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo")(session);



app.use(session({
  secret: 'SECRET KEY',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: 'mongodb+srv://PizzaApp:UJ5KeEHn10mV1Fhm@cluster0.fzjs5cn.mongodb.net/PizzaApp',
    ttl: 1000 * 24 * 60 * 60,
    autoRemove: 'native'
  })
}));




// Global middleware
app.use((req, resp, next) => {
  if(session){
    resp.locals.session = req.session
    console.log("Global middleware")
    
    next()
  }
})



//init Route

require("./routes/user")(app);

app.listen(port, () => {
  console.log("this sever running at the port", port);
})

  