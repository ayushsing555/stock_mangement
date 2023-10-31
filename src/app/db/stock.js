import mongoose from "mongoose";
const stockStructure = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    }
})
const Stock = mongoose.models.stock||mongoose.model("stock",stockStructure);
export default Stock;