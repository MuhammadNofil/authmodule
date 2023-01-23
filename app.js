const express=require('express')
const cookiSession=require('cookie-session')
const app=express();
const cors=require('cors')
app.use(cookiSession({name:"session",keys:["nofil"],maxAge:24 *60 * 60 *100}))
app.use(express.json())
const UserRouter=require('./routes/User/user.routes')
const SessionRouter=require('./routes/User/UserSession.routes')

app.use(cors({ origin: true, credentials: true }));
app.use('/user/',UserRouter)
app.use('/user/login',SessionRouter)


module.exports= app