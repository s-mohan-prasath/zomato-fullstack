import passport from 'passport';
import googleOAuth from 'passport-google-oauth2'

import { UserModel } from '../database/allModels'

const GoogleStrategy = googleOAuth.Strategy;

const options = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
}

export default (passport) =>{
    passport.use(
        new GoogleStrategy(options,async (accessToken, refreshTokn, profile, done) =>{
            const newUser = {
                fullName:profile.displayName,
                email: profile.emails[0].value,
                profilePic:profile.photos[0].value,
            }
            try{
                const user = await UserModel.findOne({email:newUser.email})
                if(user){
                    const token = await user.generateJwtToken();
                    done(null,{user,token})
                }
                else{
                    const user = await UserModel.create(newUser);
                    const token= await user.generateJwtToken();
                    done(null, {user, token})
                }

            }catch(error){
                done(error,null)
            }
        })
    )
    passport.serializeUser((userData, done) => done(null,{...userData}));
    passport.deserializeUser((id,done) => done(null,id));
}
