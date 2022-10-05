// import express from "express";

// import { UserModel } from "../../database/user";

// const Router = express.Router();

// Router.post("/signup", async (req, res) => {
//   try {
//     await UserModel.findByEmailAndPhone(req.body.credentials);

//     const newUser = await UserModel.create(req.body.credentials);
//     const token = newUser.generateJwtToken();
//     return res.status(200).json({ token, status: "success" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message, status:"fails" });
//   }
// });

// export default Router
// // 
import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/signin", async (req, res) => {
  try{
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = UserModel.generateJwtToken();
    res.status(200).json({token, status:"success"})

  }
  catch(error){
    return res.status(500).json({ error: error.message });
  }
});

export default Router;



// Getting Error ===> "error": "Cannot destructure property 'email' of 'undefined' as it is undefined."
