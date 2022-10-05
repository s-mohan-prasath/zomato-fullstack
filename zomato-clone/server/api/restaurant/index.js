import express from 'express'
import { RestaurantModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route    /
 * Des      Get all the restaurants details based on the leads
 * Params   none
 * Access   Public
 * Method   GET
 */

Router.get("/",async (req,res)=>{
    try{
        // http://localhost:4000/
        const {city} = req.query
    }catch(error){
        return res.status(500).json({error:error})
    }
})


export default Router