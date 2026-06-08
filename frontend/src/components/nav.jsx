import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { PiUserSwitchBold } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import { LuList } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineBookmarks } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { userContext } from '../context/user';
import { toast } from 'react-toastify';
import { listingContext } from '../context/listauth';
import { amenitiesContext } from '../context/amenitiescont';


const Nav = () => {
    const [showInfo, setshowInfo] = useState(false);
    let navigate = useNavigate();


    const { userData, logout, loading } = useContext(userContext);
    let { getAmenitieswithid } = useContext(amenitiesContext);

    const [showlogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const { searchData, setSearchdata, handleSearch,getListWithId } = useContext(listingContext);
    let [SClose,setSclose]=useState(false);
   

    const [input, setInput] = useState("");

    const handleLogout = async () => {

        await logout();

        setshowInfo(false);
    }

    const handleClick=async(id)=>{
        if (userData) {
            getListWithId(id);
           await getAmenitieswithid(id);
           setSclose(true);
           setInput("");
           setSearchdata([]);
            navigate("/viewcarddetails");
           
        } else {
           
            navigate("/login");
        }
    }

    useEffect(() => {
        if (!input.trim()) {
            setSclose(true);
            setSearchdata([]);
            return;
        }
    
        setSclose(false);
        handleSearch(input);
    }, [input]);

    return (
        <div>
            <div className='flex justify-between items-center bg-green-200 h-[80px] top-0 left-0 shadow-lg md:px-10  px-5 relative sm:w-screen' >
                <div className='flex text-center justify-center items-center gap-x-5 text-green-900 ' >
                    <img className='lg:h-14 lg:w-14 md:h-12 md:w-12  rounded-full h-12 w-12' src='./icon.jpg'></img>
                    <p className='lg:text-2xl md:text-lg font-bold text-[22px]'>Havnly</p>
                </div>

                <div className=' justify-center items-center relative hidden md:block w-[300px]'>
                    <input className='h-10 md:w-[300px]  rounded-3xl border-[1px] border-gray-200 shadow-md text-start px-2 outline-none mt-2 lg:w-[400px] ' type='search' placeholder='Any Where | Any Place  |  Any Time' onChange={(e) => setInput(e.target.value)} value={input}  ></input>
                    <FaSearch className='bg-green-900 rounded-full text-white h-[30px] w-[30px] p-1 right-3 absolute top-1.5 lg:top-[13px] lg:right-[-85px]  md:top-[13px]' />

                </div>

                {!SClose && searchData?.length > 0 && <div className='  md:h-[450px] h-[300px] flex flex-col gap-[20px] absolute md:top-20 top-36 overflow-auto left-[10%] scrollbar-hide lg:left-[20%] md:left-[17%] xl:left-[30%] justify-start items-center'>
                    <div className='lg:max-w-[600px] md:max-w-[400px] max-w-[280px] w-[100vw] md:h-[220px] h-[180px] overflow-hidden flex flex-col bg-green-100 p-[20px] rounded-lg border-[1px] border-gray-400 cursor-pointer z-50 overflow-y-auto scrollbar-hide'>
                        <MdClear
                className='absolute top-2 right-2 h-6 w-6 cursor-pointer text-white bg-green-900 '
                onClick={() => {
                    setSclose(true);
                    setSearchdata([]);
                    setInput("");
                }}
            />
                        {
                            searchData.map((search) => (
                                <div className='border-b border-black md:p-[10px] p-1 ' onClick={(e)=>handleClick(search._id)}>
                                    {search.title} in {search.landmark},{search.city}

                                </div>
                            ))
                        }

                    </div>

                </div>}

                {showInfo && <div className=' h-auto w-[250px] md:w-[250px] absolute bg-white right-5 top-16 z-10 md:shadow-xl shadow-lg shadow-black flex flex-col  items-start rounded-lg '>
                    <MdClear onClick={() => setshowInfo(false)} className='absolute top-3 right-3 h-[25px] w-[25px] cursor-pointer' />



                    {
                        loading ? null : !userData ? (
                            <p
                                className="py-6 px-2 w-full border-b border-gray-200 flex items-center gap-x-2 cursor-pointer"
                                onClick={() => {
                                    setShowLogin(true);
                                    setshowInfo(false);
                                }}
                            >
                                <LuLogOut className="rotate-180 rounded-full text-green-900 h-[25px] w-[25px]" />
                                Login
                            </p>
                        ) : (
                            <p
                                className="py-6 px-2 w-full border-b border-gray-200 flex items-center gap-x-2 cursor-pointer"
                                onClick={handleLogout}
                            >
                                <LuLogOut className="rotate-180 rounded-full text-green-900 h-[25px] w-[25px]" />
                                Logout
                            </p>
                        )
                    }




                    {userData?.role === 'host' ? (
                        <p
                            className='py-6 px-2 w-full border-b-[1px] border-gray-200 flex gap-x-2 cursor-pointer'
                            onClick={() => {
                                toast.success("Switched to Travelling mode!");
                                navigate('/')
                            }}
                        >
                            <PiUserSwitchBold className='rounded-full text-green-900 h-[28px] w-[28px] font-extrabold justify-center' />
                            Switch to Travelling

                        </p>
                    ) : (
                        <p
                            className='py-6 px-2 w-full border-b-[1px] border-gray-200 flex gap-x-2 cursor-pointer'
                            onClick={() => {
                                toast.success("Switched to Hosting mode!");
                                navigate('/page1')
                            }
                            }
                        >
                            <PiUserSwitchBold className='rounded-full text-green-900 h-[28px] w-[28px] font-extrabold justify-center' />
                            Switch to Hosting
                        </p>
                    )}
                    <p className='py-6 px-2 w-full border-b-[1px] border-gray-200 flex gap-x-2 '><MdOutlineManageAccounts className=' rounded-full text-green-900  h-[28px] w-[28px] font-extrabold justify-center' />Account</p>
                    {userData?.role === 'host' && (
                        <p
                            className='py-6 px-2 w-full border-b-[1px] border-gray-200 flex gap-x-2 cursor-pointer'
                            onClick={() => navigate("/mylist")}
                        >
                            <LuList className='rounded-full text-green-900 h-[28px] w-[28px] font-extrabold justify-center' />
                            My Listings
                        </p>
                    )}
                    <p className='py-6 px-2 w-full border-b-[1px] border-gray-200 flex gap-x-2 cursor-pointer' onClick={() => navigate("/mybooking")}><MdOutlineBookmarks className=' rounded-full text-green-900  h-[26px] w-[26px] font-extrabold   justify-center' />My Bookings</p>
                    <p className='py-6 px-2  flex gap-x-2 cursor-pointer' onClick={() => navigate("/wishlist")}><IoMdHeartEmpty className=' rounded-full text-green-900  h-[26px] w-[26px] font-extrabold   justify-center' />WishList</p>
                    {!loading && userData && <p className='py-6 px-2   gap-x-2 cursor-pointer ml-5 block sm:hidden' onClick={() => navigate("/page1")}>Become a Host</p>}


                </div>}
                {
                    showlogin && (
                        <Login
                            onClose={() => setShowLogin(false)}
                            onSwitch={() => {
                                setShowLogin(false);
                                setShowSignup(true);
                            }}

                        />
                    )
                }


                {
                    showSignup && (
                        <Signup
                            onClose={() => setShowSignup(false)}
                            onSwitch={() => {
                                setShowSignup(false);
                                setShowLogin(true);
                            }}
                        />
                    )
                }

                <div className='flex gap-2 justify-center items-center'>
                    {!loading && userData && (
                        <p className='mr-4 font-bold md:text-base  lg:text-lg hidden md:block cursor-pointer' onClick={() => navigate("/page1")} >
                            Become a Host
                        </p>
                    )}

                    <FaUserCircle className='h-10 w-10 rounded-full bg-green-800 text-white bordr-gray-300 border-[1px]' />
                    <FiMenu className='h-10 w-10 rounded-full  text-green-800 p-2 bg-white border-[1px] bordr-gray-300' onClick={() => setshowInfo(prev => !prev)} />
                </div>
            </div >

            <div className="flex justify-center " onClick={() => setshowInfo(false)}>
                <div className="relative block md:hidden">
                    <input className='h-10 w-[300px] rounded-3xl border-[1px] border-gray-200 shadow-md text-center px-2 outline-none mt-2 ' type='search' placeholder='Any Where  |  Any Place  |  Any Time' onChange={(e) => setInput(e.target.value)} value={input}   ></input>
                    <FaSearch className='bg-green-900 rounded-full text-white h-[30px] w-[30px] p-1 left-2 top-3 absolute' />

                </div>
            </div>
        </div >
    )
}

export default Nav;
