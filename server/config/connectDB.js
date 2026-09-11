import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


if(!process.env.MONGODB_URL){
    throw new Error(
        "please provide mongo_url in env file"
    )
}

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect DB")
    } catch (error) {
        console.log("mongo connect error",error);
        process.exit(1);
    }
}
export default connectDb;
