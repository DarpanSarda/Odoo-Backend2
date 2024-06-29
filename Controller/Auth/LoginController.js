const userService=require('../../services/userService')
const jwtProvider=require('../../jwtprovider')
const bcrypt = require('bcrypt')

const login = async(req,res)=>{
    try {
        const{password,email}=req.body;
        const user=await userService.getUserByEmail(email);
        if(!user)
        {
            res.status(404).send({
                message:"User not found !! Please Register First",
                success:false
            })
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid)
        {
            res.status(401).send({
                message:"Wrong Credentials",
                success:false
            })
        }

        const jwt = jwtProvider.generateToken(user._id)
        const role = user.role;
        return res.status(200).send({
            jwt,
            message:"Login success",
            success:true,
            role:role,
        })

    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports=login;