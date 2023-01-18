const passport=require('passport')
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(new FacebookStrategy({
    clientID:"958588976831-t7nciqg3llrotd6p1vf7uoguu7534ofi.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"/auth/google/callback",
    passReqToCallback:true,
},facebook))

function facebook(accessToken,refreshToken,profile,done) {
            done(null,profile)
}
passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})