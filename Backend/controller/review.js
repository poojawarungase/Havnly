const Listing = require("../models/listing");
const { Review } = require("../models/review");
const User = require("../models/user");

const addReview = async (req, res) => {

    try {

        const { id } = req.params;
        // console.log("Received ID from frontend:", id);

        const { comment, rating } = req.body;

        let listing = await Listing.findById(id);

        if (!listing) {
            return res.status(404).json({ message: "Listing is not found" })
        }

        const review = await Review.create({
            comment,
            rating,
            guest: req.user._id,
            listing: listing._id
        })

        const user = await User.findByIdAndUpdate(req.user._id, { $push: { review: review._id } }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "user is not found" })
        }

        await Listing.findByIdAndUpdate(listing._id,
            {
                $push: {
                    reviewBy: {
                        guest: review.guest,
                        rating: review.rating,
                    }
                }
            },
            { new: true });

        return res.status(200).json(review);


    } catch (error) {
        return res.status(500).json({ message: `reviwe create ${error} ` })
    }
}


const getReviewsByListing = async (req, res) => {
    try {
        const { listId } = req.params;
       

        const listing = await Listing.findById(listId);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        const reviews = listing.reviewBy.filter(r => typeof r.rating === "number");

        const totalReviews = reviews.length;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalReviews ? totalRating / totalReviews : 0;

        
        return res.status(200).json({
            averageRating: parseFloat(averageRating.toFixed(1)),
            totalReviews,
            reviews,
        });

    } catch (error) {
        console.error('Error fetching listing reviews:', error);
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};



module.exports = {
    addReview,
    getReviewsByListing
}