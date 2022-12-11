"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We are making it as export default function
// because we can import this function as what ever
// name we want when importing it in our js filessssssss
var _default = async () => {
  return _mongoose.default.connect(process.env.MONGO_URI);
};

exports.default = _default;