const mongoose = require("mongoose");

const cancellationSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true,
    },
    cancelledBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    cancelledAt: {
        type: Date,
        default: Date.now,
    }
});

const CancelBooking = mongoose.model("cancellation", cancellationSchema);

module.exports = CancelBooking;