import mongoose from "mongoose";

// Make the user sign in faster enough so that user won't feel bore.
const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
    address: [
      {detail:{
        type: String,
      },
    for:{
        type:String
    }}
    ],
    phoneNumber:[{type:Number}],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", UserSchema);
