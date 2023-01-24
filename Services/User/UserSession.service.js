const User=require('../../Schema/User/user.schema')
const {comparePassword}=require('../../middleware/middleware')

const login=async(email,password)=>{
    // const {email,password}=userInfo
    console.log(email,password)
    try {
    const FindByEmail=await User.find({email:email})
    if (!FindByEmail) {
        return false
    }
    const checkpass=await comparePassword(password,FindByEmail[0].password)
    if (!checkpass) {
        return false
    }
    return FindByEmail
    } catch (error) {
        console.log(error)        
    }
}

module.exports={login}