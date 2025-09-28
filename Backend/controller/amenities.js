const Amenities = require("../models/amenities");
const User = require("../models/user");


const addAmenities = async (req, res) => {

    try {

        const hostId = req.user._id;

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'Host (user) not authenticated' });
        }

        const { guests, bedrooms, beds, bathrooms, anyamenities, placeHasOffer } = req.body;

        const amenities = await Amenities.create({
            guests,
            bedrooms,
            beds,
            bathrooms,
            anyamenities,
            placeHasOffer,
            host: hostId,

        })

        const user = await User.findByIdAndUpdate(hostId, { $push: { amenId: amenities._id } }, { new: true });

        if (!user) {
            return res.json({ meassage: `${error}` });
        }


        return res.send(amenities);

    } catch (error) {
        return res.status(400).json({ meassage: `add amenities ${error}` });
    }
}

const getAmenities = async (req, res) => {


    try {

        let { id } = req.params;

        const amenities = await Amenities.findOne({ list: id });

        if (!amenities) {
            res.status(400).json({ message: "amenities not found" })
        }
        res.status(200).json(amenities);
    } catch (error) {
        res.status(400).json({ message: `amenities not found ${error}` })
    }
}

const getAminity = async (req, res) => {

    try {
        const amenities = await Amenities.find().sort({ createdAt: -1 });

        if (!amenities) {
            res.status(400).json({ message: "amenities not found" })
        }
        res.status(200).json(amenities);
    } catch (error) {
        res.status(400).json({ message: `amenities not found ${error}` })
    }
}

module.exports = {
    addAmenities,
    getAmenities,
    getAminity
}