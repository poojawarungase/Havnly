const express = require("express");
const isAuth = require("../middleware/userauth");
const { createBooking, getBookingByListingId } = require("../controller/booking");
const { cancelBooking } = require("../controller/cancelbooking")

const router = express.Router();

router.post("/create/:id", isAuth, createBooking);
router.put("/cancel/:id", isAuth, cancelBooking);
// router.get("/bookinguser/:id", getBookingByListingId);

module.exports = router;