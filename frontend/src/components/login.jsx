import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiSolidHide } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { userContext } from '../context/user';
import { authContext } from '../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { otpContex } from '../context/otpcontex';


const Login = ({ onClose, onSwitch }) => {
    let navigate = useNavigate();

    const [showpass, setShowPass] = useState(false);
    const { serverUrl } = useContext(authContext);
    let { userData, getUsers, setuserData } = useContext(userContext);
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { setEmail: setOtpEmail } = useContext(otpContex);



    const handleLogin = async (e) => {

        try {
            e.preventDefault();


            let response = await axios.post(serverUrl + "/user/login", {
                email,
                password: pass,
            }, { withCredentials: true })
            setuserData(response.data);
            setOtpEmail(email);
            handleClear();

            await getUsers();
            onClose?.();
            navigate('/otp');
            console.log(response);


            toast.success("Login Completed");

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const handleClear = () => {
        setEmail("");
        setPass("");
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
                <form onSubmit={handleLogin}>
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="w-[300px] shadow-2xl flex flex-col p-8  rounded-xl relative  md:w-[450px] bg-[#FFFFFF8F] ">

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
                                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    id="email" required onChange={(e) => setEmail(e.target.value)} value={email}
                                    className="p-2 mb-4 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-green-900"
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
                                    }}
                                    value={pass}
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

                            <button className='bg-green-900 text-white font-semibold py-2 shadow-xl text-lg md:text-xl rounded-md transition-transform hover:scale-105 md:w-[90%] w-[60%] '>Submit</button>

                            <p className='m-2 text-blue-950 text-base md:text-lg'>
                                Don't have an account?{' '}
                                <span
                                    onClick={() => {
                                        if (onSwitch) {
                                            onSwitch();
                                        } else {
                                            navigate('/signup');
                                        }
                                    }}
                                    className='cursor-pointer'
                                >
                                    Signup.
                                </span>
                            </p>


                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login