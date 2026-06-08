const mongoose=require("mongoose")

const mongo_url=process.env.MONGO_URL

async function dbConnect(){

    try {
        await mongoose.connect(mongo_url)
        console.log("Databse Connected ....")
    } catch (error) {
        console.log("Database Error " , error)
    }
}

module.exports=dbConnect