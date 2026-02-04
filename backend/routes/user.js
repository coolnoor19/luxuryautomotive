import express from "express"
import User from "../models/user.js"
import { createUser, loginUser } from "../controller/user.controller.js"
const router = express.Router()

router.post("/register" , createUser)
router.post("/login" , loginUser)

router.get("/" , (req, res)=>{
    res.status(200).json({
        message : "welcome to another routee"
    })
})

export default router