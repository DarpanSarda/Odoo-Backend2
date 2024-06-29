const ProductService = require("../../../services/productService")

const createMultipleProduct = async(req,res)=>{
    try {
        const product = await ProductService.createMultipleProduct(req.body);
        
        return res.status(200).send({
            success:true,
            message:"Products Created Successfully",
        });
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = createMultipleProduct;