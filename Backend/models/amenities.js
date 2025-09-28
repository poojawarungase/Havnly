const mongoose = require("mongoose");

const amenitiesSchema = new mongoose.Schema({
    guests: {
        type: Number,
        required: true,
        default: 1,
    },
    bedrooms: {
        type: Number,
        required: true,
        default: 1,
    },
    beds: {
        type: Number,
        required: true,
        default: 1,
    },
    bathrooms: {
        type: Number,
        required: true,
        default: 1,
    },
    anyamenities: {
        type: String,
        default: "No"
    },
    placeHasOffer: {
        type: String,
        default: "not much"
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    }],

})

const Amenities = mongoose.model("amenities", amenitiesSchema);

module.exports = Amenities;