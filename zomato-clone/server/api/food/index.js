import express from 'express'

import { FoodModel } from '../../database/allModels'

const Router = express.Router()


/**
 * Route     /:_id
 * Def       Get food based on id
 * Params   _id
 * Access    Public
 * Method    GET
 */

Router.get('/:_id',async (req,res)=>{
    try{
        const {_id} = req.params;
        const food = FoodModel.findById(_id);
        return res.status(200).json({food})

    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

/**
 * Route    /r/:_id
 * Des       Get all the food based on particular restaurant id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/r/:_id", async(req,res)=>{
    try{
        const {_id} = req.params;
        const foods= await FoodModel.find({
            restaurant:_id,
        })
        return res.status(200).json({foods})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

/**
 * Route    /c/:category
 * Des       Get all the food based on particular category
 * Params    category
 * Access    Public
 * Method    GET
 */

 Router.get("/c/:category", async(req,res)=>{
    try{
        const {_id} = req.params;
        const foods= await FoodModel.find({
            // $regex -> for the pattern of the keyword in database(Find all the possible)
            // $options -> for case insensitive
            // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
            category: {$regex:category,$options:"i"},
        })
        if(!foods) return res.status(404).json({error: "can not find foods based on the particular category"})
        return res.status(200).json({foods})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
})



export default Router