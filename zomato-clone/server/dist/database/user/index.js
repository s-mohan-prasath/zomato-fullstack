"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make the user sign in faster enough so that user won't feel bore.
const UserSchema = new _mongoose.default.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: [{
    detail: {
      type: String
    },
    for: {
      type: String
    }
  }],
  phoneNumber: [{
    type: Number
  }]
}, {
  timestamps: true
}); // attachments

UserSchema.methods.generateJwtToken = function () {
  return _jsonwebtoken.default.sign({
    user: this._id.toString()
  }, "ZomatoApp");
}; // helper functions


UserSchema.statics.findByEmailAndPhone = async ({
  email,
  phoneNumber
}) => {
  const checkUserByEmail = await UserModel.findOne({
    email
  });
  const checkUserByPhone = await UserModel.findOne({
    phoneNumber
  });
  console.log(checkUserByEmail);

  if (checkUserByEmail) {
    throw new Error("User Already Exists ...!");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({
  email,
  password
}) => {
  const user = await UserModel.findOne({
    email
  });
  console.log(user);
  if (!user) throw new Error("User does not exist !!! "); // Comparing Stored & Encrypted Password and (Encrypting user filled password)

  const doesPasswordMatch = await _bcryptjs.default.compare(password, user.password);
  if (!doesPasswordMatch) throw new Error("Invalid Credentials !!!");
  return user;
};
/*this function always get the parameter that is next() function
Schema also has different stages.....such as save,count,..*/


UserSchema.pre("save", function (next) {
  const user = this; // console.log(user)
  // password is modifled
  // if (!user.isModified("password")) return next();
  // generate bcrypt salt

  _bcryptjs.default.genSalt(8, (error, salt) => {
    if (error) return next(error); // hash the password

    _bcryptjs.default.hash(user.password, salt, (error, hash) => {
      if (error) return next(error); // assigning hashed password

      user.password = hash;
      return next();
    });
  });
});

const UserModel = _mongoose.default.model("users", UserSchema);

exports.UserModel = UserModel;