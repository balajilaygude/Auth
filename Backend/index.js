const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
//whatever you import and that file need .env access must import belo this
require("dotenv").config()
//here
const dbConnect = require("./Config/db")
const router = require("./Routes/Auth.routes")
const productRouter = require("./Routes/Products.routes")

const app=express()
port=process.env.PORT || 3000

app.use(bodyparser.json())
app.use(cors())

app.use("/auth", router)
app.use("/products", productRouter)

app.get("/",(req,res)=>{
    return res.json({
        message:"Connect jhalo"
    })
})

// app.listen(port,()=>{
//     console.log("Server Started ....")
//     dbConnect()
// })

module.exports = app;
