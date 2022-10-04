import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Make the user sign in faster enough so that user won't feel bore.
const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
    address: [
      {
        detail: {
          type: String,
        },
        for: {
          type: String,
        },
      },
    ],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

// attachments

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

// helper functions

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User Already Exist");
  }
  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("User does not exist !!! ");

  // Comparing Stored & Encrypted Password and (Encrypting user filled password)
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("Invalid Credentials !!!");
  return user;
};

/*this function always get the parameter that is next() function
Schema also has different stages.....such as save,count,..*/

UserSchema.pre('save',(next)=>{
  // Getting instance of the Current User
  
  const user = this;

  // Password is modified
/*
The following code is because if the user sign in the app using google
sign in then we won't get password so, Our app don't want to wait
for the password encryption
*/
    // password is modifled
    if (!user.isModified("password")) return next();

/*  If we send the password to the database, then we are encrypting it
  bcrypt salting\
  Generate bcrypt salt*/
  
  bcrypt.genSalt(8,(error,salt)=>{
    if (error){
      return next(error)
    }
    // Hashing the password
    else{
      bcrypt.hash(user.password,salt, (error,hash)=>{
        if (error) return next(error);
        
        // assigning hashed password
        user.password=hash;
        return next();
      })
    }
  })

})

export const UserModel = mongoose.model("users", UserSchema);
