const orderService = require("../../../services/orderService");

const orderhistory = async(req,res)=>{
    const user=await req.user;
    try {
        let orders = await orderService.usersOrderHistory(user);

        res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports=orderhistory;