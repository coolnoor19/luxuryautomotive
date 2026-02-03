import express from "express"

const app = express()

app.use(express.json())

app.get("/" , (req, res)=>{
    return res.status(200).json({
        message : "welcome to luxurry automotive"
    })
})

app.listen( 4001 , ()=>{
    console.log(" server is running on prot 4001")
})