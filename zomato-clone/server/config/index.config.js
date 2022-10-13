import JwtPassport from "passport-jwt";

import { UserModel } from "../database/allModels";

const JWtStrategy = JwtPassport.Strategy;
const ExtractJWT = JwtPassport.ExtractJwt;

/**
 * head{
 *  Authorization: "Bearer: wpipffhewae08gewr80tyery08eyg"
 * }
 */

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoApp",
};

export default (passport) => {
  new JWtStrategy(options, async (jwt__payloads, done) => {
    try {
      const doesUserExist = await UserModel.findById(jwt__payloads.user);
      if (!doesUserExist) return done(null, false);
      return done(null, doesUserExist);
    } catch (error) {
      throw new Error(error);
    }
  });
};
