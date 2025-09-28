const express = require("express");
const isAuth = require("../middleware/userauth");
const { addlist, getListings, viewListings, getListWithId, updateList, deleteList, search } = require("../controller/listing");
const upload = require("../middleware/multer");

const router = express.Router();



router.post("/addlist", isAuth, upload.array('images', 10), addlist);

router.get("/getlistings", getListings);
router.get("/viewlists/:id", isAuth, viewListings);
router.get("/getlists/:_id", getListWithId);
router.put("/update/:id", upload.array('images', 10), updateList);
router.delete("/delete/:id", deleteList);
router.get("/search",search);

module.exports = router;