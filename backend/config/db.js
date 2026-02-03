import mongoose from "mongoose"
import dotenv from 'dotenv'

const connectDb = () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URI)
        console.log("connect database")
    } catch (error) {
        console.log("error")
    }
}

export default connectDb