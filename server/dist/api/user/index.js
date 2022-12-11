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
 * Des      Get authorized user data
 * Params   none
 * Access   Private
 * Method   GET
 */
Router.get("/", _passport.default.authenticate("jwt", {
  session: false
}), async (req, res) => {
  try {
    const {
      email,
      fullName,
      phoneNumber,
      address
    } = req.user;
    return res.status(200).json({
      user: {
        email,
        fullName,
        phoneNumber,
        address
      }
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
    console.log(error);
  }
});
/**
 * Route     /update/:_id
 * Des       Update Authorised User Data
 * Params   _id
 * Access   Private
 * Method   GET
 */

Router.put("/update/:_id", _passport.default.authenticate("jwt", {
  session: false
}), async (req, res) => {
  try {
    const {
      _id
    } = req.params;
    const {
      userData
    } = req.body; // Don't allow user to change the password

    userData.password = undefined;
    const updateUserData = await _allModels.UserModel.findByIdAndUpdate(_id, {
      $set: userData
    }, {
      new: true
    });
    res.status(200).json({
      user: updateUserData
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route     /:_id
 * Des       Get User data ( For Review System )
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    //below line from stackoverflow correction and below one is most important
    //for prevent from the error ===> Cast to ObjectId failed for value \"63419def1ae07b000554e5291fdeuyygyugyg\" (type string) at path \"_id\" for model \"users\"
    const _id = _mongoose.default.Types.ObjectId(req.params._id);

    console.log(_allModels.UserModel);
    const UserDetail = await _allModels.UserModel.findById(_id);
    if (!UserDetail) return res.status(200).json({
      error: "User not found"
    });
    const {
      fullName
    } = UserDetail;
    return res.json({
      user: {
        fullName
      }
    }).status(200);
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
var _default = Router;
exports.default = _default;