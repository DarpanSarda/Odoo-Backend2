const ratingService = require("../../../services/ratingService");

const getAllRatings = async(req,res) => {
    const productid = req.params.productId;
    try {
        const ratings = await ratingService.getProductRating(productid)

        res.status(200).send(ratings);
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = getAllRatings;