"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var _allModels = require("../database/allModels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JWtStrategy = _passportJwt.default.Strategy;
const ExtractJWT = _passportJwt.default.ExtractJwt;
/**
 * head{
 *  Authorization: "Bearer: wpipffhewae08gewr80tyery08eyg"
 * }
 */

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoApp"
};

var _default = passport => {
  passport.use(new JWtStrategy(options, async (jwt__payloads, done) => {
    try {
      const doesUserExist = await _allModels.UserModel.findById(jwt__payloads.user);
      if (!doesUserExist) return done(null, false);
      return done(null, doesUserExist);
    } catch (error) {
      throw new Error(error);
    }
  }));
};

exports.default = _default;