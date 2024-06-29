const ProductService = require("../../../services/productService")

const getAllProducts = async(req,res)=>{
    try {
        const product = await ProductService.getAllProducts(req.query)
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = getAllProducts;