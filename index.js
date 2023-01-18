const express=require('express')
const cookiSession=require('cookie-session')
const passport=require('passport')
const app=express();
const cors=require('cors')
const PassportSetup=require('./passport/GoogleStartegy')
const jwt=require('jsonwebtoken')
// const AuthRoute=require('./routes/auth')
const Auth=require('./routes/Google/google.routes')

app.use(cookiSession({name:"session",keys:["nofil"],maxAge:24 *60 * 60 *100}))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({ origin: true, credentials: true }));
const users=[
    {
        id:"1",
        username:"nofil",
        password:"nofil",
        isAdmin:true
    },
    {
        id:"2",
        username:"riaz",
        password:"riaz",
        isAdmin:false
    }
]
app.get('/',(req,res)=>{
        res.send("hello")
})
app.use('/auth',Auth)
app.post('/user/login',(req,res)=>{
    const {username,password}=req.body
    const user=users.find((v)=>{
        return v.username===username && v.password===password
    })
    if (user) {
        const acessToken=jwt.sign({id:user.id ,isAdmin:user.isAdmin},"mysecretkey")
        res.send({user,acessToken})
    }else{
        res.status(400).send("invalid email or password")
    }
})
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
  
      jwt.verify(token, "mySecretKey", (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid!");
        }
  
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated!");
    }
  };
  app.delete("/api/users/:userId", verify, (req, res) => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
      res.status(200).json("User has been deleted.");
    } else {
      res.status(403).json("You are not allowed to delete this user!");
    }
  });
app.listen("5000",()=>{
    console.log("app is running")
})