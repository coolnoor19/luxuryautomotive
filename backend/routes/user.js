import express from "express"
import User from "../models/user.js"
const router = express.Router()

router.post("/register" , async (req, res)=>{
    try {
        const { name , email , password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message : "all fields are required"
            })
        }

        const user = await User.create({
            name,
            email,
            password
        })

        return res.status(201).json({
            message : "user created successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message : "internal server error",
            error : error.message
        })
    }
})

router.get("/" , (req, res)=>{
    res.status(200).json({
        message : "welcome to another routee"
    })
})

export default router