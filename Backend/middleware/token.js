const jwt = require("jsonwebtoken");

const genToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
}

const verifyToken = (token) => {
    const checkToken = jwt.verify(token, process.env.JWT_SECRET);
    return checkToken;
}

module.exports = {
    genToken,
    verifyToken,
}