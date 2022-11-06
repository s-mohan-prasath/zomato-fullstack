import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Make the user sign in faster enough so that user won't feel bore.
const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: {type:String, required:true},
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
  console.log(checkUserByEmail);
  if (checkUserByEmail) {
    throw new Error("User Already Exists ...!");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  console.log(user)
  if (!user) throw new Error("User does not exist !!! ");

  // Comparing Stored & Encrypted Password and (Encrypting user filled password)
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("Invalid Credentials !!!");
  return user;
};

/*this function always get the parameter that is next() function
Schema also has different stages.....such as save,count,..*/

UserSchema.pre("save", function (next) {
  const user = this;
  // console.log(user)

  // password is modifled
  // if (!user.isModified("password")) return next();

  // generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    // hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // assigning hashed password
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("users", UserSchema);
