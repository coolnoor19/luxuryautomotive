import express from "express"
import User from "../models/user.js"
import bcrypt from "bcrypt"


const router = express.Router()

async function createUser  (req, res){
    try {
        const { name , email , password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message : "all fields are required"
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        const user = await User.create({
            name,
            email,
            password : hashedPassword
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
}

async function loginUser ( req, res){
    try {
        const { email , password} = req.body

        if(!email || !password){
            return res.status(400).json({
                message : "all fields are required"
            })
        }

        const user = await User.findOne({ email })

        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }

        const isPasswordValid = await bcrypt.compare(password , user.password)

        if(!isPasswordValid){
            return res.status(401).json({
                message : "invalid password"
            })
        }

        return res.status(200).json({
            message : "user logged in successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message : "internal server error",
            error : error.message
        })
    }
}



export { createUser , loginUser}