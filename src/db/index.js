import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async ()=>{
    try {
       const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`\n MongooDb Connected !! DB Host: ${connectionInstence.connection.host}`)
    } catch (error) {
        console.log("mongoodb connection error",error);
        process.exit(1);
    }
}

export default connectDB;