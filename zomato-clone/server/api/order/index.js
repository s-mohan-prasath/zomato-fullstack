import express from "express";
import mongoose from "mongoose";
import passport from "passport";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route    /
 * Des       GET all orders
 * Params    _id
 * Access    Private
 * Method    GET
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      console.log(user);
      const getOrders = await OrderModel.findOne({ user: user });
      if (!getOrders) return res.status(400).json({ error: "User Not Found" });
      return res.status(200).json({ order: getOrders });
    } catch (error) {
      return res.status(504).json({ error: error.message });
    }
  }
);

/**
 * Route    /new/
 * Des       Add new order
 * Params    _id
 * Access    Private
 * Method    POST or PUT
 */

Router.put(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const { orderDetails } = req.body;
      
      const addNewOrder = await OrderModel.findOneAndUpdate(
        { user: user._id },
        {
          $push: {
            orderDetails: orderDetails,
          },
        },
        {
          new: true,
        }
      );

      return res.status(200).json({ order: addNewOrder });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
