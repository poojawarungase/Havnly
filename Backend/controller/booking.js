const Booking = require("../models/booking");
const Listing = require("../models/listing");
const User = require("../models/user");


const createBooking = async (req, res) => {

    try {

        const { id } = req.params;

        const { checkIn, checkOut, totalRent } = req.body;

        let listing = await Listing.findById(id);

        if (!listing) {
            return res.status(404).json({ message: "Listing is not found" })
        }

        if (new Date(checkIn) >= new Date(checkOut)) {
            return res.status(400).json({ message: "invalid the date" })
        }

        if (listing.isBooked) {
            return res.status(400).json({ message: "place is already booked" })
        }

        let booking = await Booking.create({
            checkIn,
            checkOut,
            totalRent,
            host: listing.host,
            guest: req.user._id,
            listing: listing._id,
        })


        await booking.populate("host", "email ");
        await booking.populate("listing");


        let user = await User.findByIdAndUpdate(req.user._id, {
            $push: { booking: booking._id }
        }, { new: true })



        if (!user) {
            return res.status(404).json({ message: "user is not found" })
        }

       


        listing.guest = req.user._id;
        listing.isBooked = true;
        listing.bookedBy = req.user._id;

        await listing.save();

        return res.status(200).json(booking)


    } catch (error) {
        return res.status(500).json({ message: `booking error ${error}` })
    }
}





module.exports = {
    createBooking,
    
}