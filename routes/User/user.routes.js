const UserRouter = require("express").Router();
const UserController=require('../../Controllers/User/user.controller')

UserRouter.post('/create/',UserController.create)

module.exports=UserRouter