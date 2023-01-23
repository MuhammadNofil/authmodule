const SessionRouter = require("express").Router();
const SessionController=require('../../Controllers/User/UserSession.controller')

SessionRouter.post('/',SessionController.login)

module.exports=SessionRouter