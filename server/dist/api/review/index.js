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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Router = _express.default.Router();
/**
 * Route     /new
 * Des      Create new review for restaurant/food
 * Params   none
 * Access   Private
 * Method   post
 */


Router.post("/new", _passport.default.authenticate("jwt", {
  session: false
}), async (req, res) => {
  try {
    const {
      _id
    } = req.user;
    const {
      reviewData
    } = req.body;
    const review = await _allModels.ReviewModel.create(_objectSpread(_objectSpread({}, reviewData), {}, {
      _id
    }));
    return res.status(200).json({
      review
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route     /:resId
 * Des      Create new review for restaurant/food
 * Params   resId
 * Access   Public
 * Method   GET
 */

Router.get("/:resId", async (req, res) => {
  try {
    const {
      resId
    } = req.params;
    const Reviews = await _allModels.ReviewModel.find({
      restaurant: resId
    });
    console.log(Reviews);
    if (!Reviews) return res.json({
      message: "no review found"
    });
    return res.status(200).json({
      Reviews
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route     /delete/:id
 * Des      Delete review by review id
 * Params   id
 * Access   Private
 * Method   DELETE
 */

Router.delete("/delete/:id", _passport.default.authenticate("jwt", {
  session: false
}), async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      user
    } = req;
    const data = await _allModels.ReviewModel.findOneAndDelete({
      _id: id,
      user: user
    });
    if (!data) return res.json({
      message: "Review not found"
    });
    return res.json({
      message: "Review deleted Successfully"
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
var _default = Router;
exports.default = _default;