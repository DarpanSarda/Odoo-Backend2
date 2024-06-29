const cartItemService = require("../../../../services/cartItemService")

const updatecartitem = async(req,res)=>{
    const user = req.user;
    try {
        const updateitem = await cartItemService.updatecartItem(user._id,req.params.id,req.body)
        
        return res.status(200).send(updateitem);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports=updatecartitem;