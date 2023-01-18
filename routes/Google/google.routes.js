const GoogleRouter = require("express").Router();
const passport=require('passport')

GoogleRouter.get('/google',passport.authenticate('google',{scope:["profile"]}))
GoogleRouter.get("/login/failed/",(req,res)=>{
    res.send("success")
})
GoogleRouter.get("/logout",(req,res)=>{
    req.logout()
    res.redirect('/http://localhost:5000')
})
GoogleRouter.get('/google/callback',passport.authenticate('google',{
    successRedirect:"/http://localhost:5000",
    failureRedirect:"/login/failed/"
}))

module.exports=GoogleRouter