const orderService = require("../../../services/orderService");

const findorderbyid = async(req,res)=>{
    const user=await req.user;
    try {
        let order = await orderService.findOrderById(req.params.id);

        res.status(200).send(order);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports=findorderbyid;