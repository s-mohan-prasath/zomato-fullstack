import express from "express";
import mongoose from "mongoose";
import passport from "passport";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route     /new
 * Des      Create new review for restaurant/food
 * Params   none
 * Access   Private
 * Method   post
 */

Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
    const {_id} = req.user;
    const {reviewData} = req.body;
    const review =await ReviewModel.create({...reviewData,_id})

    return res.status(200).json({review})

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  );

/**
 * Route     /:resId
 * Des      Create new review for restaurant/food
 * Params   resId
 * Access   Public
 * Method   GET
 */

Router.get("/:resId", async (req, res) => {
    try {
        const { resId } = req.params;

    const Reviews = await ReviewModel.find({ restaurant: resId });
    console.log(Reviews);
    if (!Reviews) return res.json({ message: "no review found" });
    
    return res.status(200).json({ Reviews });
} catch (error) {
    return res.status(500).json({ error: error.message });
}
});

/**
 * Route     /delete/:id
 * Des      Delete review by review id
 * Params   id
 * Access   Private
 * Method   DELETE
 */

 Router.delete(
    "/delete/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {

        const {id} = req.params;
        const {user} = req;

        const data = await ReviewModel.findOneAndDelete({
            _id:id,
            user:user
        })
        if (!data) return res.json({message:"Review not found"})
        return res.json({message:"Review deleted Successfully"})
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
    
    );


export default Router;
