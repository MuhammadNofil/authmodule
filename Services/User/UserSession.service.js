const User=require('../../Schema/User/user.schema')
const {comparePassword}=require('../../middleware/middleware')

const login=async(userInfo)=>{
    const {email,password}=userInfo
    try {
    const FindByEmail=await User.find({email:email})
    if (!FindByEmail) {
        // const ComparePassword=await comparePassword(password,FindByEmail[0].password)
        // if (!ComparePassword) {
        //     return false
        // }
        return false
    }
    const checkpass=await comparePassword(password,FindByEmail[0].password)
    if (!checkpass) {
        return false
    }
    return true
    } catch (error) {
        console.log(error)        
    }
}

module.exports={login}