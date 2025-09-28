const express = require("express");
const isAuth = require("../middleware/userauth");
const { addAddress } = require("../controller/address");


const router = express.Router();



router.post("/add", isAuth, addAddress);



module.exports = router;