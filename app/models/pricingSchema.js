const mongoose=require("mongoose");

const pricingSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,   
    },
    img:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model("menu", pricingSchema);