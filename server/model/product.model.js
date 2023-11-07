const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    title:String,
    img:String,
    text:String,
    rating:number
},{
    versionKey:false
})

const productModel=mongoose.model("products",productSchema)

module.exports={
    productModel
}