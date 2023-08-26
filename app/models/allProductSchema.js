const mongoose=require("mongoose");

const appProdcutSchema=new mongoose.Schema({
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
    },
    type:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("allTypeProduct", appProdcutSchema);