const reviewService = require("../../../services/reviewService");

const createReview = async(req,res) => {
    const user = req.user;
    try {
        const review = await reviewService.createReview(req.body,user); 

        res.status(200).send(review);
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = createReview;