const Listing = require("../models/listing");
const uploadOnCloudinary = require("../middleware/cloudinary");
const User = require("../models/user");
const Amenities = require("../models/amenities")

const addlist = async (req, res) => {

    try {

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'Host (user) not authenticated' });
        }

        const hostId = req.user._id;

        const amenities = await Amenities.findOne({ host: hostId }).sort({ createdAt: -1 });

        if (!amenities) {
            return res.status(404).json({ message: 'No amenities found for this user' });
        }

        const amenId = amenities._id;

        const imageUrls = [];


        for (const file of req.files) {
            const imageUrl = await uploadOnCloudinary(file.path);
            if (imageUrl) imageUrls.push(imageUrl);
        }

        const { title, description, city, location, landmark, rent, category } = req.body;


        let listing = await Listing.create({
            title,
            description,
            city,
            location,
            landmark,
            rent,
            category,
            images: imageUrls,
            host: hostId,
            amenhost: amenId,
        })


        const user = await User.findByIdAndUpdate(hostId,
            {
                $push:
                    { lists: listing._id },
                $set: { role: 'host' },
            },
            { new: true });

        if (!user) {
            return res.json({ message: `${error}` });
        }

        // push amenities id in listing collection
        // await Amenities.findByIdAndUpdate(amenities._id, { listing: listing._id });


        const updatedAmenities = await Amenities.findByIdAndUpdate(
            amenId,
            { $push: { list: listing._id } },
            { new: true }
        );

        if (!updatedAmenities) {
            return res.status(404).json({ message: 'Amenities not found for update with listing ID' });
        }


        //    for update in  amenities collection of update list id
        await Listing.findByIdAndUpdate(listing._id, { $push: { amenities: amenities._id } });

        return res.send(listing);
    } catch (error) {
        return res.status(400).json({ meassage: `add listing ${error}` });
    }
}

const getListings = async (req, res) => {
    try {
        let listing = await Listing.find().sort({ createdAt: -1 }).populate("bookedBy", "_id")
        res.status(200).json(listing)
    } catch (error) {
        res.status(500).json({ message: `get listing ${error}` })
    }
}

const viewListings = async (req, res) => {

    try {
        let { id } = req.params;


        let listing = await Listing.findById(id);

        if (!listing) {
            res.status(404).json({ message: "listing not found" })
        }

        res.status(200).json(listing)
        return;

    } catch (error) {
        res.status(500).json({ message: `view listing :${error}` })
    }
}

const getListWithId = async (req, res) => {

    try {
        let { _id } = req.params;
        let listing = await Listing.findById(_id).populate("host", "firstname lastname").populate("bookedBy", "_id");


        if (!listing) {
            res.status(404).json({ message: "listing not found" })
        }

        return res.status(200).json(listing);


    } catch (error) {
        return res.status(500).json({ message: `view listing :${error}` })
    }
}

const updateList = async (req, res) => {

    try {
        let { id } = req.params;

        const imageUrls = [];
        if (req.files && Array.isArray(req.files)) {
            for (const file of req.files) {
                const imageUrl = await uploadOnCloudinary(file.path);
                if (imageUrl) imageUrls.push(imageUrl);
            }
        }


        const { title, description, city, location, landmark, rent, category } = req.body;


        let updatedData = {
            title,
            description,
            city,
            location,
            landmark,
            rent,
            category,
        };


        if (imageUrls.length > 0) {
            updatedData.images = imageUrls;
        }

        const listing = await Listing.findByIdAndUpdate(id, updatedData, { new: true });


        return res.status(200).json(listing);

    } catch (error) {
        return res.status(500).json({ message: ` update listing ${error}` })
    }
}

const deleteList = async (req, res) => {

    try {

        const { id } = req.params;

        const deleteListing = await Listing.findByIdAndDelete(id);

        if (!deleteListing) {
            return res.status(404).json({ message: `delete list is not found` })
        }

        return res.status(200).json(deleteListing)

    } catch (error) {
        return res.status(500).json({ message: ` update listing ${error}` })
    }

}

const search = async (req, res) => {

    try {

        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ message: "search query is required" });
        }

        const listing = await Listing.find({
            $or: [
                { landmark: { $regex: query, $options: "i" } },
                { city: { $regex: query, $options: "i" } },
                { title: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
            ]
        });

        return res.status(200).json(listing);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }
}

module.exports = {
    addlist,
    getListings,
    viewListings,
    getListWithId,
    updateList,
    deleteList,
    search
}