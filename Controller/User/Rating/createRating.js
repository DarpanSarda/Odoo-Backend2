const ratingService = require("../../../services/ratingService");

const createRating = async(req,res) => {
    const user = req.user;
    try {
        const rating = await ratingService.createRating(req.body,user);

        res.status(200).send(rating);
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = createRating;