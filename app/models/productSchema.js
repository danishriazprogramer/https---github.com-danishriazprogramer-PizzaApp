const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
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
    small:{
        type:Number
    },
    medium:{
        type:Number
    },
    large:{
        type:Number
    },
})

module.exports = mongoose.model("product", productSchema);