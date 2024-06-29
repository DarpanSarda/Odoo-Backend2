const userService=require('../../services/userService')
const jwtProvider=require('../../jwtprovider')
const cartService=require('../../services/cartService')

const register = async(req,res)=>{
    console.log(req)
    try {
        const user=await userService.createUser(req.body);

        const jwt=jwtProvider.generateToken(user._id);

         await cartService.createCart(user);

        return res.status(200).send({
            jwt,
            message:"Register Success",
            success:true,
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports=register;