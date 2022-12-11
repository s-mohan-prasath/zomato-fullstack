import express from "express";
import { RestaurantModel } from "../../database/allModels";
import { ValidateRestaurantCity, ValidateRestaurantSearch } from "../../validate/restaurant.validate";

const Router = express.Router();

/**
 * Route    /:_id
 * Des      Get individual restaurant details based on the id
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant)
      return res.status(404).json({ error: "No restaurant found" });
    return res.status(200).json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /
 * Des      Get all the restaurants details based on the query
 * Params   none
 * Access   Public
 * Method   GET
 */

Router.get("/", async (req, res) => {
  try {
    // http://localhost:4000/restaurant/?city=tirupur
    const { city } = req.query;
    await ValidateRestaurantCity(req.query)
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res
        .json({ message: `No restaurant found in ${city}` })
        .status(400);
    }
    return res.json({ restaurants }).status(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /search/:searchString
 * Des      Get all the restaurant  based on the searchString
 * Params   searchString
 * Access   Public
 * Method   GET
 */

Router.get("/search/:searchString", async (req, res) => {
  try {
    const searchString= req.params.searchString;
    await ValidateRestaurantSearch(req.params)
    const restaurants = await RestaurantModel.find({
      name: {
        $regex: searchString,
        $options: "i",
      },
    });

    if (restaurants.length === 0)
      return res
        .status(404)
        .json({ error: `No restaurant matched with ${searchString}. ` });

    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route /create
 * Des   Create restaurant
 * Params None
 * Access Public
 * Method POST
 */

Router.post("/create", async (req, res) => {
  try {
    const address = req.body.credentials.address;
    const restaurant = await RestaurantModel.findOne({ address });
    if (restaurant)
      return res
        .status(500)
        .send({ status: "failed", error: "Restaurant Already Exists" });
    var Created = await RestaurantModel.create(req.body.credentials);
    res.status(200).json({ status: "success", Created });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Example => body section data sending
/**
 * {
    "credentials":{
        "name":"raj mohan restaurant",
        "city":"tirupur",
        "address":"41/24, Anna Street, Anupparpalayam, Tirupur",
        "mapLocation":"41/24, Anna Street, Anupparpalayam, Tirupur"
    }
}
 */

export default Router;
