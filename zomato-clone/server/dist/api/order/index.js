"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passport = _interopRequireDefault(require("passport"));

var _allModels = require("../../database/allModels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Router = _express.default.Router();
/**
 * Route    /
 * Des       GET all orders
 * Params    _id
 * Access    Private
 * Method    GET
 */


Router.get("/", _passport.default.authenticate("jwt", {
  session: false
}), async (req, res) => {
  try {
    const {
      user
    } = req;
    console.log(user);
    const getOrders = await _allModels.OrderModel.findOne({
      user: user
    });
    if (!getOrders) return res.status(400).json({
      error: "User Not Found"
    });
    return res.status(200).json({
      order: getOrders
    });
  } catch (error) {
    return res.status(504).json({
      error: error.message
    });
  }
});
/**
 * Route    /new/
 * Des       Add new order
 * Params    _id
 * Access    Private
 * Method    POST or PUT
 */

Router.put("/new", _passport.default.authenticate("jwt", {
  session: false
}), async (req, res) => {
  try {
    const {
      user
    } = req;
    const {
      orderDetails
    } = req.body;
    const addNewOrder = await _allModels.OrderModel.findOneAndUpdate({
      user: user._id
    }, {
      $push: {
        orderDetails: orderDetails
      }
    }, {
      new: true
    });
    return res.status(200).json({
      order: addNewOrder
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
var _default = Router;
exports.default = _default;