const UserSessionService=require('../../Services/User/UserSession.service')
const {token,Refreshtoken,COOKIE_OPTIONS}=require('../../middleware/middleware')
const responses=require('../../Responses/response')
const login = async(req,res)=>{
    const {email,password}=req.body
    try {
    const jwt=token({email})
    const login=await UserSessionService.login(email,password)
    if (login) {
        res.cookie("refreshToken", Refreshtoken({email}),COOKIE_OPTIONS);
        res.send(
            responses.genericResponse(200, true, { jwt,login }, null, responses.SUCCESS)
          );   
    }
    else{
        res.send(responses.genericResponse(500,false,responses.FAILED,))
    }
            return;
    } catch (error) {
        res.send(responses.genericResponse(500,false,responses.FAILED,))
        return;
    }
}
module.exports={login}