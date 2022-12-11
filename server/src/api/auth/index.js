import express from "express";
import passport from 'passport'

import { UserModel } from "../../database/allModels";
import { ValidateSignIn, ValidateSignUp } from "../../validate/auth.validate";

const Router = express.Router();

/**
 * Route    /signup
 * Des       create new authorised user
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullName } = req.body.credentials;
    await ValidateSignUp(req.body.credentials);
    // await UserModel.findByEmailAndPhone(email, password, fullName);
    const user = await UserModel.findOne({ email });
    if (user) throw new Error("User Already Exists");
    const newUser = await UserModel.create({ email, password, fullName });
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
    await ValidateSignIn(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = await user.generateJwtToken();
    res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /google
 * Des       GOOGLE Sign in
 * Params    none
 * Access    Public
 * Method    GET
 */

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/**
 * Route    /google/callback
 * Des       Redirect uri
 * Params    none
 * Access    Public
 * Method    GET
 */

Router.get(
  "/google/callback",
  passport.authenticate("google", 
  { failureRedirect: "/" }),
  async (req, res) => {
    // redirecting the user to the front end 
    return res.redirect(
      `http://localhost:3000/google/$(req.session.passport.user.token)`
    )
    
  } 
  )

export default Router;

// Getting Error ===> "error": "Cannot destructure property 'email' of 'undefined' as it is undefined."
