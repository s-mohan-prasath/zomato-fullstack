"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateSignUp = exports.ValidateSignIn = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ValidateSignUp = userData => {
  const Schema = _joi.default.object({
    fullName: _joi.default.string().required().min(3),
    email: _joi.default.string().required().email(),
    password: _joi.default.string().required().pattern(new RegExp("^[a-zA-Z0-9]{8-15}$")),
    address: _joi.default.array().items(_joi.default.object({
      details: _joi.default.string(),
      for: _joi.default.string()
    })),
    phoneNumber: _joi.default.array().items(_joi.default.number().min(10).max(10))
  });

  return Schema.validateAsync(userData);
};

exports.ValidateSignUp = ValidateSignUp;

const ValidateSignIn = userData => {
  const Schema = _joi.default.object({
    email: _joi.default.string().required().email(),
    password: _joi.default.string().required()
  });

  return Schema.validateAsync(userData);
};

exports.ValidateSignIn = ValidateSignIn;