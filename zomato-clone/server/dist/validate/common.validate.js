"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateId = exports.ValidateCategory = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ValidateId = userData => {
  const Schema = _joi.default.object({
    _id: _joi.default.string().required()
  });

  return Schema.validateAsync(userData);
};

exports.ValidateId = ValidateId;

const ValidateCategory = userData => {
  const Schema = _joi.default.object({
    category: _joi.default.string().required()
  });

  return Schema.validateAsync(userData);
};

exports.ValidateCategory = ValidateCategory;