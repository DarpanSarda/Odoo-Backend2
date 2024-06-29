const orderService = require("../../../services/orderService");

const createOrder = async(req,res)=>{
    const user= await req.user;
    try {
        let createdOrder = await orderService.createOrder(user,req.body);

        res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports=createOrder;