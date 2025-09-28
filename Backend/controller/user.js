const User = require("../models/user");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { genToken } = require("../middleware/token");
const { generateOTP, sendOtpEmail } = require("./email");
const otpStore = require('../config/otpstore');
const isAuth = require("../middleware/userauth");



router.post("/signup", [
    check('firstname', 'name is required').notEmpty().isLength({ min: 2 }),
    check('lastname', 'name is required').notEmpty().isLength({ min: 2 }),
    check('email', 'email is required').notEmpty().isEmail(),
    check('password')
        .notEmpty().withMessage('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/)
        .withMessage('Password must include uppercase, lowercase, number, special character and be at least 6 characters'),


], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let existUser = await User.findOne({ email: req.body.email });
        if (existUser) {
            return res.status(400).json({ error: 'user already exist' });
        }

        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);

        const { firstname, lastname, email } = req.body;
        let user = await User.create({
            firstname,
            lastname,
            email,
            password: secpass,
        })

        const token = genToken(user);
        res.cookie("token", token, {
            httpOnly: true,
            secure:true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        const otp = generateOTP();
        const expires = Date.now() + 5 * 60 * 1000; 

        otpStore.set(email, { otp, expires });

        await sendOtpEmail(email, otp);

        return res.status(201).json({ user, message: 'Signup successful. OTP sent to email.' });


    } catch (error) {

        return res.status(400).json({ message: `signup error:${error}` })
    }
})


router.post("/login", [
    check('email', 'email is required').notEmpty().isEmail(),
    check('password')
        .notEmpty().withMessage('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/)
        .withMessage('Password must include uppercase, lowercase, number, special character and be at least 6 characters'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let { email, password } = req.body;


        const user = await User.findOne({ email }).populate("lists", "title description landmark city category location rent images");
        ;

        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const comparepass = await bcrypt.compare(password, user.password);

        if (!comparepass) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = genToken(user);
        res.cookie("token", token, {
            httpOnly: true,
            secure:true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        const otp = generateOTP();
        const expires = Date.now() + 5 * 60 * 1000; 

        otpStore.set(email, { otp, expires });
        console.log(otp);

        await sendOtpEmail(email, otp);

        return res.status(201).json({ user, message: 'Login successful. OTP sent to email.' });


    } catch (error) {
        return res.status(500).json({ message: error.message || 'Login failed' });


    }
})

router.post("/logout", async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "Strict",
            secure: true
        });
        console.log("Logout successful");
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Logout failed", error: error.message });
    }
});


router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp)
        return res.status(400).json({ message: 'Email and OTP are required' });

    const record = otpStore.get(email);

    if (!record)
        return res.status(400).json({ message: 'No OTP requested for this email' });

    if (Date.now() > record.expires) {
        otpStore.delete(email);
        return res.status(400).json({ message: 'OTP expired, please request a new one' });
    }

    
    if (record.otp !== otp.toString()) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    otpStore.delete(email);

    return res.status(200).json({ message: 'OTP verified successfully!' });
});

router.get("/getuser", isAuth, async (req, res) => {
    try {

        const userId = req.user._id || req.user.id || req.user;

        const user = await User.findById(userId)
            .select("-password")
            .populate({

                path: "booking",
                populate: {
                    path: "listing",
                    select: "title description landmark city category location rent images isBooked host"
                }
            })
            .populate({
                path: "lists",
                select: "title description landmark city category location rent images isBooked host"
            })
            .populate({
                path: "wishList",
                populate: {
                    path: "listing",
                    populate: {
                        path: "amenhost",
                        select: "beds bathrooms bedrooms guests anyamenities placeHasOffer"
                    }
                }
            })
            .populate({
                path: "booking",
                populate: {
                    path: "listing",
                    populate: {
                        path: "amenhost",   
                        select: "beds bathrooms bedrooms guests anyamenities placeHasOffer"
                    }
                }
            });
        if (!user) {
            res.status(404).json({ message: "user not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: `get user :${error}` });
    }
})

module.exports = router;