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
let cached = false;

async function dbConnect() {
    if (cached) return;

    await mongoose.connect(process.env.MONGO_URL);

    cached = true;
    console.log("Database Connected");
}

app.use(async (req, res, next) => {
    try {
        await dbConnect();   // IMPORTANT: await here
        next();
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Database connection failed"
        });
    }
});

module.exports = app;
