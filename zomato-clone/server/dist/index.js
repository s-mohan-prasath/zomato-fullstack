"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _auth = _interopRequireDefault(require("./api/auth"));

var _food = _interopRequireDefault(require("./api/food"));

var _restaurant = _interopRequireDefault(require("./api/restaurant"));

var _user = _interopRequireDefault(require("./api/user"));

var _passport = _interopRequireDefault(require("passport"));

var _index = _interopRequireDefault(require("./config/index.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodyParser = require('body-parser');

(0, _index.default)(_passport.default); // Variables

const zomato = (0, _express.default)();

_dotenv.default.config(); // common variables


var PORT = 4000; // Database Connection

zomato.use(_express.default.json());
zomato.use(_passport.default.initialize());
zomato.get('/', (req, res) => {
  res.json({
    message: "server is running"
  });
}); //  /auth/signup
// parse application/x-www-form-urlencoded

zomato.use(bodyParser.urlencoded({
  extended: false
})); // parse application/json

zomato.use(bodyParser.json());
zomato.use("/auth", _auth.default);
zomato.use("/food", _food.default);
zomato.use("/restaurant", _restaurant.default);
zomato.use("/user", _user.default);
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("server is running");
  }).catch(error => {
    console.log("server is running but connection is failed");
    console.log(error);
  });
}); //