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
const bodyParser = require('body-parser')

// Variables
const zomato=express();
dotenv.config()

// common variables
var PORT = 4000 


// Database Connection

zomato.use(express.json())

zomato.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
});

//  /auth/signup
// parse application/x-www-form-urlencoded
zomato.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
zomato.use(bodyParser.json())

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