const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const app=express();
require('./passport/GoogleStartegy')
const session = require('express-session')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//implementing cors
app.use(cors({ origin: true, credentials: true }));
// app.use(cors())
app.use(session({
    secret: 'somethingsecretgoeshere',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
 }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session())

const UserRouter=require('./routes/User/user.routes')
const SessionRouter=require('./routes/User/UserSession.routes')
const GoogleRouter=require('./routes/Google/google.routes')


app.get('/', (req, res) => {
    res.send("<button><a href='/auth'>Login With Google</a></button>")
});
app.use('/user/',UserRouter)
app.use('/user/login',SessionRouter)
app.use('/auth/',GoogleRouter)


module.exports= app