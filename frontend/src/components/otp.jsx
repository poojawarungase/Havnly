import React, { useContext, useState } from "react";
import { otpContex } from "../context/otpcontex";
import { useNavigate } from "react-router-dom";

const OTPCard = () => {
    const [otp, setOtp] = useState("");
    const { handleOTP, email } = useContext(otpContex);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 6); // allow only 4 digits
        setOtp(value);
    };

    const handleSubmit = () => {
        if (!otp || otp.length !== 6) {
            alert("Please enter a 6-digit OTP");
            return;
        }
        handleOTP(otp);
        navigate("/")
    };

    return (
        <div className='fixed inset-0 z-20 backdrop-blur-sm bg-[#000000a9] flex items-center justify-center' >
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-[350px] shadow-2xl flex flex-col p-8  rounded-xl relative  md:w-[450px] bg-[#8fceae]" >
                    <h2 className="text-xl font-semibold text-center mb-4">Enter OTP</h2>
                    <p className="text-sm text-center mb-2 text-gray-700">OTP sent to: <b>{email}</b></p>
                    <input
                        type="text"
                        value={otp}
                        onChange={handleChange}
                        maxLength={6}
                        placeholder="Enter 6-digit OTP"
                        className="w-full text-center text-lg border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-green-900 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTPCard;

