const FacebookRouter = require("express").Router();
const passport=require('passport')

FacebookRouter.get('/google',passport.authenticate('google',{scope:["profile"]}))
FacebookRouter.get("/login/failed",(req,res)=>{
    res.send("success")
})
FacebookRouter.get("/logout",(req,res)=>{
    req.logout()
    res.redirect('/http://localhost:5000')
})
FacebookRouter.get('/google/callback',passport.authenticate('google',{
    successRedirect:"/http://localhost:5000",
    failureRedirect:"/login/failed"
}))

module.exports=FacebookRouter