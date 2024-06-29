const orderService = require("../../../services/orderService")

const DeliverOrder = async(req,res)=>{
    try {
        const orders = await orderService.deliveredOrder(req.params.orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({
            success: false,
            error:error.message
        })
    }
}

module.exports = DeliverOrder;