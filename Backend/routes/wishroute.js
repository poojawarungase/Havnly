const express = require("express");
const isAuth = require("../middleware/userauth");
const { addwish, removewish } = require("../controller/wishlist");

const router = express.Router();

router.post("/add/:id", isAuth, addwish);
router.put("/remove/:id", removewish);


module.exports = router;