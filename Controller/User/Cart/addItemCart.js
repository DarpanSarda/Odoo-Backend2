const CartService = require("../../../services/cartService")

const addtocart = async(req,res)=>{
    const user = req.user;
    try {
        console.log(user._id)
        let cartItem = await CartService.addCartItem(user._id,req.body);
        console.log(cartItem);
        return res.status(200).send(cartItem);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = addtocart;