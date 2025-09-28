const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, 
    },
});

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); 
};



const sendOtpEmail = async (email, otp) => {
    const mailOptions = {
        from: 'poojawarungase30@gmail.com', 
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendOtpEmail,
    generateOTP,
}