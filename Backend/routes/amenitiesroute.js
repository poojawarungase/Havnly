const express = require("express");
const isAuth = require("../middleware/userauth");
const { addAmenities, getAmenities, getAminity } = require("../controller/amenities");


const router = express.Router();



router.post("/add", isAuth, addAmenities);
router.get("/get/:id", getAmenities);
router.get("/get", getAminity);


module.exports = router;