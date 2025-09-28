const express = require("express");
const isAuth = require("../middleware/userauth");
const { createPayment } = require("../controller/payment");



const router = express.Router();



router.post("/add/:id", isAuth, createPayment);


module.exports = router;