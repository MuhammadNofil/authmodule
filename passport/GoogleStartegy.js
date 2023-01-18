const passport=require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
    clientID:"958588976831-t7nciqg3llrotd6p1vf7uoguu7534ofi.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"/auth/google/callback",
    passReqToCallback:true,
},function(accessToken, refreshToken, profile, cb,done) {
    console.log(profile)
     done(null,profile)
}))



passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})