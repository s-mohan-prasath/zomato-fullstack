"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _allModels = require("../../database/allModels");

var _auth = require("../../validate/auth.validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Router = _express.default.Router();
/**
 * Route    /signup
 * Des       create new authorised user
 * Params    none
 * Access    Public
 * Method    POST
 */


Router.post("/signup", async (req, res) => {
  try {
    const {
      email,
      password,
      fullName
    } = req.body.credentials;
    await (0, _auth.ValidateSignUp)(req.body.credentials); // await UserModel.findByEmailAndPhone(email, password, fullName);

    const user = await _allModels.UserModel.findOne({
      email
    });
    if (user) throw new Error("User Already Exists");
    const newUser = await _allModels.UserModel.create({
      email,
      password,
      fullName
    });
    const token = newUser.generateJwtToken();
    return res.status(200).json({
      token,
      status: "success"
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route    /signin
 * Des       Login to existing Account
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/signin", async (req, res) => {
  try {
    await (0, _auth.ValidateSignIn)(req.body.credentials);
    const user = await _allModels.UserModel.findByEmailAndPassword(req.body.credentials);
    const token = await user.generateJwtToken();
    res.status(200).json({
      token,
      status: "success"
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route    /google
 * Des       GOOGLE Sign in
 * Params    none
 * Access    Public
 * Method    GET
 */

Router.get("/google", _passport.default.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
}));
/**
 * Route    /google/callback
 * Des       Redirect uri
 * Params    none
 * Access    Public
 * Method    GET
 */

Router.get("/google/callback", _passport.default.authenticate("google", {
  failureRedirect: "/"
}), async (req, res) => {
  // redirecting the user to the front end 
  return res.redirect(`http://localhost:3000/google/$(req.session.passport.user.token)`);
});
var _default = Router; // Getting Error ===> "error": "Cannot destructure property 'email' of 'undefined' as it is undefined."

exports.default = _default;