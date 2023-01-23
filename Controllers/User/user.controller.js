const {Register}=require('../../Services/User/user.service')
const responses=require('../../Responses/response')

const create= async(req,res,next)=>{
    try {
        const user=await Register(req.body)
        if (!user) {
            res.send(responses.genericResponse(500,false,responses.FAILED,))
            return;
        }
        res.send(
            responses.genericResponse(200, true, { user }, null, responses.SUCCESS)
          );        
    } catch (error) {
        next(error)
    }
}

module.exports={create}