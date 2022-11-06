import express from "express"
import mongoose from "mongoose"
import passport from "passport"

import {MenuModel} from "../../database/allModels"
import { ImageModel } from "../../database/allModels"

const Router=express.Router();

/**
 * Route    /list
 * Des       Get menus based on menu id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/list/:_id",async(req,res) =>{
    try{
        
        const _id = mongoose.Types.ObjectId(req.params._id);
        const menu = await MenuModel.findById(_id);

        if (!menu) return res.status(501).json({error:"No menu present"})
        return res.status(200).json(menu);


    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

/**
 * Route    /image/:_id
 * Des       Get all list of menu images with restaurant id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/images/:_id",async (req,res) =>{
    try{
        const {_id} = mongoose.ObjectId(req.params._id);

        const menuImages = await ImageModel.findById(_id);
        if (!menuImages) return res.status(404).json({error:"No menu images found"})
        return res.status(200).json({menuImages})

    }catch(error){
        return res.status(500).json({error:error.message+" --> failed",})
    }
})

export default Router