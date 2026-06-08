const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
//whatever you import and that file need .env access must import belo this
require("dotenv").config()
//here
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
let connected=false
const mongo_url=process.env.MONGO_URL

async function dbConnect(){

    try {
        await mongoose.connect(mongo_url)
        connected=true;
        console.log("Databse Connected ....")
        
    } catch (error) {
        console.log("Database Error " , error)
    }
}
app.use((req,res,next)=>{
    if(!connected){
        dbConnect();
    }
    next();
})
        
module.exports = app;
