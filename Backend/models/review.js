const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    comment: {
        type: String,
        required: true,
    }
})

const Review = mongoose.model("review", reviewSchema);

module.exports = {
    Review,
}