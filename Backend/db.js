
const mongoose = require("mongoose");

const dbconnect = async (req, res) => {

    let url = process.env.MONGODB_URL;

    try {
        await mongoose.connect(url);
        console.log("database connected 🥳🥳");
    } catch (error) {
        console.log(error);
    }

}

module.exports = dbconnect;

