const Booking = require("../models/booking");
const Listing = require("../models/listing");
const Payment = require("../models/payment");
const crypto = require("crypto");



const createPayment = async (req, res) => {

    try {

        const { id } = req.params;

        let booking = await Booking.findById(id).populate("listing");;

        if (!booking) {
            return res.status(404).json({ message: "booking is not found" })
        }


        const { amount, currency, paymentMethod, transactionId } = req.body;

        const payment = await Payment.create({
            user: req.user._id,
            amount,
            currency,
            paymentMethod,
            booking: booking._id,
            transactionId,
            paymentStatus: 'complete'
        })

        booking.paymentStatus = "complete";
        await booking.save();

        
        await Listing.findByIdAndUpdate(booking.listing._id, {
            isBooked: true
        });

        return res.status(200).json(payment);
    } catch (error) {
        console.error("Error creating payment:", error);
        return res.status(500).json({ error: "create payment " })
    }

}

module.exports = {
    createPayment,
}