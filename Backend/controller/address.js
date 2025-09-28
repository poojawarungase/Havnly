const Address = require("../models/address");

const addAddress = async (req, res) => {

    try {

        const hostId = req.user._id;

        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'Host (user) not authenticated' });
        }


        const { country, state, district, city, landmark, street, pincode } = req.body;

        const address = await Address.create({
            country,
            state,
            district,
            city,
            landmark,
            street,
            pincode,
            host: hostId,
        })

        return res.send(address);
    } catch (error) {
        return res.status(400).json({ meassage: `add address ${error}` });
    }
}
module.exports = {
    addAddress,
}