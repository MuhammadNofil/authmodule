const UserSessionService=require('../../Services/User/UserSession.service')

const login = async(req,res)=>{
    try {
    const login=await UserSessionService.login(req.body)
    if (login) {
        res.send("login")
    }
    res.send("incorrect password or email")
    } catch (error) {
        res.send("something went wrong")
    }
}
module.exports={login}