const User=require('../../Schema/User/user.schema')
const {hashedPassword}=require('../../middleware/middleware')

const Register = async (userInfo) => {
    const { name,email,password, } = userInfo;
    const Password=await hashedPassword(password)
    try {
      const alreadyExists = await User.findOne({
          email: email,
      });
      if (alreadyExists) {
        return false;
      }
      const user = await User.create({
        name,
        email,
        password:Password
      });
      if (!user) {
        return false;
      }
      return user;
    } catch (error) {
      console.log("error")
    }
  };
module.exports={Register}