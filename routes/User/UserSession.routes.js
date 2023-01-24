const SessionRouter = require("express").Router();
const SessionController=require('../../Controllers/User/UserSession.controller')
const passport=require('passport')
SessionRouter.post('/',SessionController.login)

module.exports=SessionRouter