import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './database/connection'
import {
    FoodModel,
    ImageModel,
    MenuModel,
    OrderModel,
    RestaurantModel,
    ReviewModel,
    UserModel
} from './database/allModels'

import Auth from './api/auth'


// Variables
const zomato=express();
dotenv.config()

// common variables
var PORT = 4000 

zomato.use(express.json())

// Database Connection

zomato.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
});

//  /auth/signup

zomato.use("/auth",Auth);

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