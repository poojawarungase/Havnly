const mongoose = require("mongoose");


const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amenhost: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "amenities",
        required: true,
    }],
    reviewBy: [{
        guest: { type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true },
        rating: { type: Number, 
            required: true, min: 1, max: 5 },

    }],

    isBooked: {
        type: Boolean,
        default: false,
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    wishList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wishlist",
        required: true,
    }],
},
    {
        timestamps: true,
    }
)

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;