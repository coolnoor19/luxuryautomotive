import express from "express"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import userRoute from "./routes/user.js"
import adminRoute from "./routes/admin.js"


const app = express()


dotenv.config()
app.use(express.json())

// app.use("/api/v1/todos" , todoRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/admin", adminRoute)

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "welcome to luxurry automotive"
    })
})

app.listen(4001, () => {
    connectDb()
    console.log(" server is running on prot 4001")
})