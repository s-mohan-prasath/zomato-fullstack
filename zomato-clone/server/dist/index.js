"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _auth = _interopRequireDefault(require("./api/auth"));

var _food = _interopRequireDefault(require("./api/food"));

var _restaurant = _interopRequireDefault(require("./api/restaurant"));

var _user = _interopRequireDefault(require("./api/user"));

var _menu = _interopRequireDefault(require("./api/menu"));

var _order = _interopRequireDefault(require("./api/order"));

var _review = _interopRequireDefault(require("./api/review"));

var _image = _interopRequireDefault(require("./api/image"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _index = _interopRequireDefault(require("./config/index.config"));

var _google = _interopRequireDefault(require("./config/google.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

(0, _index.default)(_passport.default);
(0, _google.default)(_passport.default); // Variables

const zomato = (0, _express.default)(); // common variables

var PORT = 5000; // Adding Additional Passport Configurations

zomato.use(_express.default.json());
zomato.use((0, _expressSession.default)({
  secret: "ZomatoApp"
}));
zomato.use(_passport.default.initialize());
zomato.use(_passport.default.session());
zomato.get('/', (req, res) => {
  res.json({
    message: "server is running"
  });
}); // parse application/json

zomato.use("/auth", _auth.default);
zomato.use("/food", _food.default);
zomato.use("/restaurant", _restaurant.default);
zomato.use("/user", _user.default);
zomato.use("/menu", _menu.default);
zomato.use("/order", _order.default);
zomato.use("/review", _review.default);
zomato.use("/image", _image.default);
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("server is running");
  }).catch(error => {
    console.log("server is running but connection is failed");
    console.log(error);
  });
}); //