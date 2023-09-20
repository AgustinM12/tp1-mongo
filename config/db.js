import mongoose from "mongoose";
import "dotenv/config"

const MONGOURL = process.env.MONGOURL || "mongodb://127.0.0.1:27017/modelo"

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURL);
        console.log("DATA BASE CONNECTED");
    } catch (error) {
        console.log("ERROR AT CONNECT DATABASE")
    }
};