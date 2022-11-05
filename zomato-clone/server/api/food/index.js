import { json } from "body-parser";
import express from "express";

import { FoodModel } from "../../database/allModels";
import { ValidateCategory, ValidateId } from "../../validate/common.validate";

const Router = express.Router();


/**
 * Route    /
 * Def      Create new food
 * Params   NONE
 * Access   Public
 * Method   POSt
 */

Router.post("/create",async (req,res)=>{
    try{
        const {credentials} = req.body;
        const food = await FoodModel.create(credentials);
        return res.json({food}).status(200)

    }catch(error){
        res.status(500).json({error:error.message})
    }
})

/**
 * food creating format
{ 
    "credentials":
        { 
            "name":"biriyani",
            "description":"It's a non veg biriyani with leg piece",
            "isVeg":false,
            "isContainEgg":true,
            "price": 200,
            "restaurant":"634821a7779dc720bb0c4cdd",
            "category":["lunch"]
        }
}
 */

/**
 * Route     /:_id
 * Def       Get food based on id
 * Params   _id
 * Access    Public
 * Method    GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await ValidateId(req.params)
    const food = await FoodModel.findById(_id);
    return res.status(200).json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /r/:_id
 * Des       Get all the food based on particular restaurant id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await ValidateId(req.params)
    const foods = await FoodModel.find({
      restaurant: _id,
    });
    if (foods.length == 0)
      return res.json({ message: "No food present in this restaurant" });
    return res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /c/:category
 * Des       Get all the food based on particular category
 * Params    category
 * Access    Public
 * Method    GET
 */

Router.get("/c/:category", async (req, res) => {
  try {
    const {category} = req.params;
    await ValidateCategory(req.params)
    const foods = await FoodModel.find({
      // $regex -> for the pattern of the keyword in database(Find all the possible)
      // $options -> for case insensitive
      // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
      category: {
        $regex: category,
        $options: "i",
      },
    });
    if (foods.length == 0) return res.status(404).json({ message: "can not find foods based on the particular category" });
    return res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
