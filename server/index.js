const express=require('express');
const app=express();
const cors=require("cors");
const productRouter = require('./routes/product.routes');
const { connection } = require('./config/db');
require("dotenv").config();


app.get("/", (req,res) => {
    res.send("welcome")
})

app.use(express.json());
app.use(cors());

app.use("/products",productRouter);


app.listen(process.env.port,async()=>{
    try{
        await connection;
          console.log("connected to db");
    }catch(err){
        console.log({"msg":"something went wrong!"})
    }
    console.log(`server running on ${process.env.port}`)
})