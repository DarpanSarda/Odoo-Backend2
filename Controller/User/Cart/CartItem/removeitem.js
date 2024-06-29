const cartItemService = require("../../../../services/cartItemService")

const removecartItem = async(req,res)=>{
    const user = await req.user;
    console.log(user._id)
    console.log(req.params.id)
    try {
        const removeitem = await cartItemService.removecartItem(user._id,req.params.id)
        console.log(removeitem)
        return res.status(200).send({
            success:true,
            message:"Item Removed Successfully"
        });
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports=removecartItem;