const CartService = require("../../../services/cartService")

const findUserCart = async(req,res)=>{
    const user = req.user;
    console.log(user)
    try {
        console.log(user._id)
        const cart = await CartService.findusercart(user._id);
        console.log(cart)
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = findUserCart