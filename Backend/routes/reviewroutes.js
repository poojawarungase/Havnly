const express = require("express");
const isAuth = require("../middleware/userauth");
const { addReview, getReviewsByListing } = require("../controller/review");


const router = express.Router();

router.post("/add/:id", isAuth, addReview);
router.get('/get/:listId', getReviewsByListing);

module.exports = router;