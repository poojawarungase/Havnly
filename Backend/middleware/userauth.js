const User = require("../models/user");
const { verifyToken } = require("./token");


const isAuth = async (req, res, next) => {
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.json({ message: "user is not exist" });
        }

        const verifyUser = verifyToken(token);


        const user = await User.findById(verifyUser._id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        // req.user = verifyUser._id;
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: `${error}` });

    }
}

module.exports = isAuth;