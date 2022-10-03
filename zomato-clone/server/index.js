import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './database/connection'

// Variables
const zomato=express();
dotenv.config()

// common variables
var PORT = 4000 

// Database Connection

zomato.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
})

zomato.use(express.json())

zomato.listen(PORT,()=>{
    ConnectDB()
    .then(()=>{
        console.log("server is running")
    })
    .catch((error)=>{
        console.log("server is running but connection is failed")
        console.log(error)
    })
})
// 