const ProductService = require("../../../services/productService")

const deleteProduct = async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = await ProductService.deleteProduct(productId);
        
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = deleteProduct;