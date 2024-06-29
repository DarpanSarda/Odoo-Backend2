const userService=require('../../services/userService');

const getUserProfile=async(req,res)=>{
    try {
        const jwt=req.headers.authorization?.split(" ")[1];

        if(!jwt)
        {
            return res.status(404).send({
                error:"User Not Found",
                success:true
            })
        }

        const user=await userService.getUserProfileByToken(jwt)

        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports=getUserProfile;