const ProductService = require("../../../services/productService")

const createProduct = async(req,res)=>{
    console.log(req.body)
    try {
        const product = await ProductService.createProduct(req.body);
        // console.log(product)
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = createProduct;