const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileimage: {
        type: String,
        default: "./public/avatar.avif",
    },
    role: {
        type: String,
        enum: ['user', 'host'],
        default: 'user',
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    }],
    amenId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenities",
        required: true,
    }],
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
        required: true,
    }],
    booking: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true,
    }],
    wishList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wishlist",
        required: true,
    }],
},
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

module.exports = User;