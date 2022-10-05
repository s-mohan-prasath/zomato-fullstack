"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _allModels = require("./database/allModels");

var _auth = _interopRequireDefault(require("./api/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Variables
const zomato = (0, _express.default)();

_dotenv.default.config(); // common variables


var PORT = 5000; // Database Connection

zomato.use(_express.default.json());
zomato.use(bodyParser.json());
zomato.use(bodyParser.urlencoded({
  extended: true
}));
zomato.get('/', (req, res) => {
  res.json({
    message: "server is running"
  });
}); //  /auth/signup

zomato.use("/auth", _auth.default);
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("server is running");
  }).catch(error => {
    console.log("server is running but connection is failed");
    console.log(error);
  });
}); //