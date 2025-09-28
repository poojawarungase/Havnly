import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidHide } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from "axios";
import { authContext } from "../context/auth";
import { userContext } from '../context/user';
import { MdClear } from "react-icons/md";
import { toast } from 'react-toastify';
import { otpContex } from '../context/otpcontex';


const Signup = ({ onClose, onSwitch }) => {

    let navigate = useNavigate();

    const { serverUrl } = useContext(authContext);
    const [showpass, setShowPass] = useState(false);
    let { userData, setuserData } = useContext(userContext);
    const { setEmail: setOtpEmail } = useContext(otpContex);

    let [fname, setfName] = useState("");
    let [lname, setlName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSignup = async (e) => {
        try {
            e.preventDefault();

            let response = await axios.post(serverUrl + "/user/signup", {
                firstname: fname,
                lastname: lname,
                email, password: pass,
            }, { withCredentials: true })
            setuserData(response.data);

            setOtpEmail(email);
            handleClear();
            onClose();
            navigate('/otp');
            toast.success("Signup Complete")
            console.log(response);


        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    const handleClear = () => {
        setEmail("");
        setPass("");
        setlName("");
        setfName("");
    }

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
        if (!regex.test(password)) {
            return "Password must include uppercase, lowercase, number, special character and be at least 6 characters";
        }
        return "";
    };

    return (
        <>
            <div className='fixed inset-0 z-20 backdrop-blur-sm bg-[#000000a9] flex items-center justify-center' >
                <form onSubmit={handleSignup}>
                    <div className="flex justify-center items-center min-h-screen ">
                        <div className="w-[300px] shadow-2xl flex flex-col md:p-8 p-3  rounded-xl relative md:w-[450px]  bg-[#FFFFFF8F]">
                            <MdClear
                                className='absolute right-1 top-1 text-green-900 text-2xl m-2 cursor-pointer'
                                onClick={() => {
                                    if (onClose) {
                                        onClose();
                                    } else {
                                        navigate('/');
                                    }
                                }}
                            />
                            <h2 className='text-green-950 text-xl mb-3 font-semibold md:text-2xl '>Welcome to havnly...</h2>
                            <div className='flex flex-col'>
                                <label htmlFor="firstname" className="mb-2 text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name..."
                                    id="firstname" required onChange={(e) => setfName(e.target.value)} value={fname}
                                    className="md:mb-4 mb-1 p-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-green-900"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="lastname" className="mb-2 text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name..."
                                    id="lastname" required onChange={(e) => setlName(e.target.value)} value={lname}
                                    className="p-2 md:mb-4 mb-1 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-green-900"
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    id="email" required onChange={(e) => setEmail(e.target.value)} value={email}
                                    className="p-2 md:mb-4 mb-1 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-green-900"
                                />
                            </div>

                            <div className='flex flex-col relative'>
                                <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type={showpass ? "text" : "password"}
                                    placeholder="Enter password..."
                                    id="password" required onChange={(e) => {
                                        const value = e.target.value;
                                        setPass(value);
                                        setPasswordError(validatePassword(value));
                                    }} value={pass}
                                    className="p-2 mb-4  border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-green-900" />
                                {showpass && (
                                    <BiSolidHide
                                        className={`absolute ${passwordError ? 'top-10' : 'bottom-6'} right-2 h-[22px] w-[22px] text-green-900`}
                                        onClick={() => setShowPass(prev => !prev)}
                                    />
                                )}

                                {!showpass && (
                                    <MdOutlineRemoveRedEye className={`absolute ${passwordError ? 'top-10' : 'bottom-6'} right-2 h-[22px] w-[22px] text-green-900`}
                                        onClick={() => setShowPass(prev => !prev)} />
                                )}
                                {passwordError && (
                                    <>
                                        <p className="text-sm text-red-600 ">{passwordError}</p>

                                    </>
                                )}
                            </div>

                            <button className='bg-green-900 text-white font-semibold py-2 shadow-xl text-lg md:text-xl rounded-md transition-transform hover:scale-105 w-[90%]' >Submit</button>
                            <p className='m-2 text-blue-950 text-base md:text-lg'>
                                Already have an account?{' '}
                                <span
                                    onClick={() => {
                                        if (onSwitch) {
                                            onSwitch();
                                        } else {
                                            navigate('/login');
                                        }
                                    }}
                                    className='cursor-pointer'
                                >
                                    Login here.
                                </span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Signup;

