import React, { memo, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClear, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { bookingContext } from '../context/bookingcontex';


const Bookingcard = ({ title, images = [], description, rent, category, cancel, city, location, id, amenhost = [], checkOut, checkIn, totalRent }) => {



    const navigate = useNavigate();
    let { reason, setReason } = useContext(bookingContext);
    const [cancelpopup, setCancelPopup] = useState(false);

    const checkIndate = checkIn;
    const dateIn = new Date(checkIndate);
    const formatDateIn = dateIn.toLocaleDateString("en-GB");

    const checkOutdate = checkOut;
    const dateOut = new Date(checkOutdate);
    const formatDateOut = dateOut.toLocaleDateString("en-GB");

    const handlecancel = async () => {
        await cancel(id);
        setCancelPopup(false)
    }

    return (
        <div>
            <div className="w-[100%] md:w-[90%] md:ml-10 justify-center mb-5 border border-gray-300 rounded-lg p-4  flex flex-col items-center shadow-md shadow-black">
                <div>
                    <MdOutlineKeyboardBackspace className="md:left-5 md:top-5 top-3 left-3 absolute md:h-[50px] md:w-[50px] h-[30px] w-[30px] bg-green-900 rounded-full p-1 text-white cursor-pointer"
                        onClick={() => navigate("/")} />
                </div>

                <div className="w-full flex items-start justify-start text-base overflow-x-auto scrollbar-hide   md:text-[22px] font-semibold mb-2">
                    <h1 className="text-ellipsis md:overflow-hidden whitespace-nowrap">
                        {`The ${category} in ${city} city, ${location}`}
                    </h1>
                </div>


                <div className="w-full md:h-[300px] h-[400px] flex flex-col md:flex-row md:gap-4 gap-2 ">

                    <div className="w-full md:w-[70%] md:h-full h-[40%]  overflow-hidden md:border-4 border-white flex justify-center items-center rounded-md">
                        {images?.[0] && (
                            <img src={images[0]} alt="" className="w-full h-full object-cover" />
                        )}
                    </div>


                    <div className="w-full md:w-[30%] md:h-full h-[60%] flex flex-col md:gap-2 gap-1">
                        {images?.[1] && (
                            <div className="w-full md:h-[48%] h-[50%] overflow-hidden md:border-4 border-white flex justify-center items-center rounded-md">
                                <img src={images[1]} alt="" className="w-full h-full object-cover" />
                            </div>
                        )}

                        {images?.length > 2 && (
                            <div className="relative w-full md:h-[48%]  h-[50%] md:border-4 border-white overflow-hidden rounded-md">
                                <img
                                    src={images[2]}
                                    alt="More images"
                                    className="w-full h-full object-cover "
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                                    <p className="bg-white text-black px-3 py-1 rounded-lg">
                                        +{images.length - 3} more images
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="w-full mt-4 text-[16px] md:text-[18px] font-serif">
                    {`${title} in ${city} city`}
                </div>
                <div className="w-full mt-2 text-[16px] md:text-[18px]">
                    {description}
                </div>

                <div className="w-full text-[14px] text-gray-600 md:text-[16px] my-2">
                    {Array.isArray(amenhost) && amenhost.length > 0 &&
                        <ul>
                            {amenhost.map((amenity) => (
                                <li key={amenity._id}>
                                    Beds: {amenity.beds} | Bathrooms: {amenity.bathrooms} | Bedrooms: {amenity.bedrooms} | Guests: {amenity.guests}
                                </li>
                            ))}
                        </ul>
                    }
                </div>


                <div className="w-full text-gray-400 mt-1 md:font-semibold font-normal">
                    Rs {rent}/day
                </div>
                <div className="w-full text-gray-500 mt-1 font-semibold">
                    Total Price : {totalRent}
                </div>
                <div className="w-full text-black mt-1 text-[12px] md:text-[18px] font-semibold">
                    Check In Date : {formatDateIn}

                </div>
                <div className="w-full text-black mt-1 text-[12px] md:text-[18px] font-semibold">
                    Check Out Date : {formatDateOut}

                </div>
                <div className='w-52 text-center  text-white font-bold bg-green-900 p-2 my-5 rounded-xl'>
                    <input type='button' value="Cancel Booking" onClick={() => setCancelPopup(true)} />
                </div>

                {cancelpopup && <div className='flex-col justify-center items-center bg-white absolute top-60 left-80 p-10 rounded-xl w-[500px] h-auto shadow-lg shadow-gray-600  '>
                    <MdOutlineClear className='h-[30px] w-[30px] absolute top-2 right-2 bg-green-900 text-white p-0.5 rounded-full' onClick={() => setCancelPopup(false)} />
                    <div className='flex flex-col gap-y-3' >
                        <label htmlFor='reason' className='md:text-[18px] font-serif'>Why are you cancel Booking..?</label>
                        <textarea type='text' id='reason' placeholder='Give the reason...' className='rounded-xl p-2 border-[1px] border-black' required onChange={(e) => setReason(e.target.value)} value={reason}></textarea>
                    </div>
                    <div className='flex flex-col'>
                        <div className='my-4'>
                            <p className='md:text-[18px] font-serif'>Are you sured..? to cancel booking</p>
                        </div>

                        <div className='flex justify-between items-center'>
                            <input className='bg-green-900 text-white font-semibold px-8 rounded-md py-1.5' type='button' value="No" onClick={() => setCancelPopup(false)} />
                            <input className='bg-green-900 text-white font-semibold px-8 rounded-md py-1.5' type='button' value="yes" onClick={handlecancel} />
                        </div>

                    </div>
                </div>}

            </div>
        </div>
    );
};

export default memo(Bookingcard);
