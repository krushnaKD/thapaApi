const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    image: {
        type: String,
        default: "",
    },
    name:{
        type:String,
        require:true,
    },
    price: {
        type: Number, 
        required: [true, "Price must be provided"],
    },
    status: {
        type:Boolean,
      default: false,
    }
})

module.exports = mongoose.model("Products",productsSchema) 