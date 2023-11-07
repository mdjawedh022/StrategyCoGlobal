const express=require('express');
const { ProductModel } = require('../model/product.model');
const productRouter=express.Router();

// all data get 
productRouter.get('/',async(req,res)=>{
    try{
        const product=await ProductModel.find();
        res.send({product});

    }catch(err){
        res.status(400).send({"msg":"something went wrong!"})
    }
})
// product by id find 
productRouter.get('/:id', async (req, res) => {
    try {
      const productId = req.params.id; // Get the product ID from the URL parameter
      const product = await ProductModel.findById(productId);
  
      if (!product) {
        return res.status(404).send({ msg: 'Product not found' });
      }
  
      res.send({ product });
    } catch (err) {
      res.status(500).send({ msg: 'Something went wrong!' });
    }
  });

//   add product in database
productRouter.post('/post',async(req,res)=>{
    try{
        const product=new ProductModel(req.body);
        await product.save();
        res.status(200).send({"msg":"A new data has been added in linkedin !"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

  module.exports = productRouter;