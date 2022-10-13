import express from 'express'

const Router = express.Router();


/**
 * Route    /
 * Des      Get authorized user data
 * Params   none
 * Access   Public
 * Method   GET
 */

Router.get("/", async(req,res) =>{
    try{
        const {email, fullName, phoneNumber, address} = 
        req.user;
        return res.status(200).json({user:{email,fullName,phoneNumber,address}})
    }catch(error){
        return res.status(500).json({error:error.message})
        console.log(error)
    }
})


export default Router;