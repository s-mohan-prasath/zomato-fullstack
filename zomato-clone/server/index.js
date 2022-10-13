import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './database/connection'


import Auth from './api/auth'
import Food from './api/food'
import Restaurant from './api/restaurant'
import User from './api/user'

import passport from 'passport'
import session from 'express-session'

import privateRouteConfig from './config/index.config'

dotenv.config()

privateRouteConfig(passport)

// Variables
const zomato=express();

// common variables
var PORT = 4000 


// Adding Additional Passport Configurations

zomato.use(express.json())
zomato.use(session({secret:"ZomatoApp"}))
zomato.use(passport.initialize())
zomato.use(passport.session())


zomato.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
});

 
// parse application/json

zomato.use("/auth",Auth);
zomato.use("/food",Food);
zomato.use("/restaurant",Restaurant);
zomato.use("/user",passport.authenticate('JWT',{session:false}),User);

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