const Listing = require("../models/listing");
const User = require("../models/user");
const Wishlist = require("../models/wishlist");


const addwish = async (req, res) => {

    try {

        const { id } = req.params;

        let listing = await Listing.findById(id);

        if (!listing) {
            return res.status(404).json({ message: "Listing is not found" })
        }

        const existingWish = await Wishlist.findOne({
            userId: req.user._id,
            listing: listing._id,
        });

        if (existingWish) {
            return res.status(400).json({ message: 'Already in wishlist' });
        }


        const wish = await Wishlist.create({
            userId: req.user._id,
            listing: listing._id,
        });

        const user = await User.findByIdAndUpdate(req.user._id, { $push: { wishList: wish._id } }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "user is not found" })
        }

        await Listing.findByIdAndUpdate(listing._id, { $push: { wishList: wish._id } }, { new: true });


        return res.status(200).json(wish);

    } catch (error) {
        return res.status(500).json(`add wish : ${error}`);
    }

}

const removewish = async (req, res) => {

    try {
        const { id } = req.params; // Wishlist ID


        const wishlist = await Wishlist.findById(id);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        // 1. Remove from the listing's wishList array
        await Listing.findByIdAndUpdate(wishlist.listing, {
            $pull: { wishList: wishlist._id },
        });

        // 2. Remove from the user wishList array
        await User.findByIdAndUpdate(wishlist.userId, {
            $pull: { wishList: wishlist._id },
        });

        wishlist.status = "remove";

        // 3. Delete the wishlist document itself
        await Wishlist.findByIdAndDelete(id);

        return res.status(200).json({ message: 'Wishlist removed successfully' });

    } catch (error) {
        return res.status(500).json({ message: `Error removing wishlist: ${error.message}` });
    }
}


module.exports = {
    addwish,
    removewish,
}