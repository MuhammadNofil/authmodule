require("dotenv").config();
const app = require("./app");
const moongose=require('mongoose')
require('./passport/GoogleStartegy')


const init = async()=>{
    app.listen(process.env.PORT,()=>{
             console.log("app is running")
         })
    try {
        await moongose.connect(process.env.MONDODB_URL)
        console.log("connected to db")
    } catch (error) {
        console.log("db and server is not workin")        
    }
}
init()