
const Booking = require("../models/booking");
const CancelBooking = require("../models/cancelbooking");
const Listing = require("../models/listing");
const User = require("../models/user");

const cancelBooking = async (req, res) => {

    try {

        const { id } = req.params;
        const { reason } = req.body;

        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }


        const cancel = await CancelBooking.create({
            booking: booking._id,
            cancelledBy: req.user._id,
            reason,
        })

        const listing = await Listing.findByIdAndUpdate(booking.listing, {
            isBooked: false,
            guest: null,
        });

        await User.findByIdAndUpdate(booking.guest, {
            $pull: { booking: listing._id },
        });



        booking.status = "cancel";
        await booking.save();
        return res.status(200).json({
            message: "Booking cancelled successfully",
            cancel,
        });

    } catch (error) {
        return res.status(500).json({ message: `Error cancelling booking: ${error}` });

    }
}

module.exports = { cancelBooking };