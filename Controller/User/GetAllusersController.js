const userService = require('../../services/userService')

const getAllusers =async(req,res)=>{
    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports=getAllusers;