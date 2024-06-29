const reviewService = require("../../../services/reviewService");

const getAllReviews = async(req,res) => {
    const productid = req.params.productId;
    try {
        const reviews = await reviewService.getAllreviews(productid); 

        res.status(200).send(reviews);
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = getAllReviews;