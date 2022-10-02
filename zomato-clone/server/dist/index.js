"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Variables
const zomato = (0, _express.default)(); // common variables

var PORT = 4000;
zomato.use(_express.default.json());
zomato.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});