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
 * Route    /list
 * Des       Get menus based on menu id
 * Params    _id
 * Access    Public
 * Method    GET
 */


Router.get("/list/:_id", async (req, res) => {
  try {
    const _id = _mongoose.default.Types.ObjectId(req.params._id);

    const menu = await _allModels.MenuModel.findById(_id);
    if (!menu) return res.status(501).json({
      error: "No menu present"
    });
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route    /image/:_id
 * Des       Get all list of menu images with restaurant id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/images/:_id", async (req, res) => {
  try {
    const {
      _id
    } = _mongoose.default.ObjectId(req.params._id);

    const menuImages = await _allModels.ImageModel.findById(_id);
    if (!menuImages) return res.status(404).json({
      error: "No menu images found"
    });
    return res.status(200).json({
      menuImages
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message + " --> failed"
    });
  }
});
var _default = Router;
exports.default = _default;