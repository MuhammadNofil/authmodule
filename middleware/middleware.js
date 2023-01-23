const bcrypt = require('bcrypt');


const hashedPassword=async(password)=>{
        const newPassword=await bcrypt.hash(password,parseInt(process.env.SALT))
        return newPassword
}

const comparePassword = async (password, passwordToCompareWith) => {
          const checkedpass=await bcrypt.compare(password, passwordToCompareWith);
          return checkedpass
};
module.exports={hashedPassword,comparePassword}