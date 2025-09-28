const cloudinary = require('cloudinary').v2;
const fs = require("fs");

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (filepath) => {
    try {
        if (!filepath) {
            return null
        }

        const uploadResult = await cloudinary.uploader.upload(filepath, {
            resource_type: "auto"
        });
        // console.log("file uploaded successfully", uploadResult.url);
        fs.unlinkSync(filepath);
        return uploadResult.secure_url;
        // return uploadResult;

    } catch (error) {
        fs.unlinkSync(filepath)
        return null;
    }
}

module.exports = uploadOnCloudinary;