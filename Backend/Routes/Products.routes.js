const { Auth } = require("../Middelewares/Auth")

const productRouter=require("express").Router()

productRouter.get("/",Auth
    ,(req,res)=>{
    return res.status(200).json([
        {
            name:"LCD T.V",
            price:50000
        },
        {
            name:"Laptop",
            price:44000
        },        
    ])
})

module.exports=productRouter