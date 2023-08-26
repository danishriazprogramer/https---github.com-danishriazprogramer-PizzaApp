const mongoose=require("mongoose");

const blogSchema=new mongoose.Schema({
    img:{
        type:String,
        required:true,   
    },
    date:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    name:{
        type: String,
    }
   
})

module.exports = mongoose.model("blog", blogSchema);