const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },

},
    { timestamps: true },
)

const Wishlist = mongoose.model('Wishlist', wishSchema);

module.exports = Wishlist;