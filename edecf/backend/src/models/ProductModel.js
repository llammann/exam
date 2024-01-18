const mongoose = require('mongoose');

const ProductSchema= mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    img:String,
    description:String
},
{
    collection:"Eproducts",timestamps:true
})
const Product=mongoose.model("Eproducts",ProductSchema)

module.exports=Product