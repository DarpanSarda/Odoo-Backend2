const orderService = require("../../../services/orderService")

const CancelOrder = async(req,res)=>{
    try {
        const orders = await orderService.cancelledOrder(req.params.orderId);

        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({
            success: false,
            error:error.message
        })
    }
}

module.exports = CancelOrder;