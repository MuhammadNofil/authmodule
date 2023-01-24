const GoogleRouter = require("express").Router();
const passport=require('passport')


GoogleRouter.get('/' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}));
  
// Auth Callback
GoogleRouter.get( '/callback',
    passport.authenticate( 'google', {
        // successRedirect: '/auth/callback/success',
        failureRedirect: '/auth/callback/failure'
}),(req,res)=>{res.redirect("/auth/callback/success/")});
  
// Success 
GoogleRouter.get('/callback/success' , (req , res) => {
    // console.log(req.user.name)
    res.json(req.user)
});
  
// failure
GoogleRouter.get('/auth/callback/failure' , (req , res) => {
    res.send("Error");
})
  
module.exports=GoogleRouter