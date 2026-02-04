import User from "../models/user.js"
import bcrypt from "bcrypt"

async function createAdmin(req, res) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // check if admin already exists with this email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User with this email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        // The key difference here is explicitly setting role: "ADMIN"
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "ADMIN"
        })

        return res.status(201).json({
            message: "Admin created successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

export { createAdmin }
