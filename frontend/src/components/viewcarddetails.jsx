import React, { useContext, useEffect, useState } from 'react';
import { listingContext } from '../context/listauth';
import { amenitiesContext } from '../context/amenitiescont';
import { bookingContext } from '../context/bookingcontex';
import { useNavigate } from 'react-router-dom';
import Nav from './nav'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { IoStar } from "react-icons/io5";
import { FaUser } from 'react-icons/fa';
import { reviewContext } from '../context/reviewcontext';



const Viewcarddetails = () => {
    let navigate = useNavigate();

    let { getlist } = useContext(listingContext);
    let { getaminity } = useContext(amenitiesContext);

    const [localRating, setLocalRating] = useState(null);



    let {
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        total,
        setTotal,
        night,
        setNight,
        handleBooking, bookingData
    } = useContext(bookingContext);

    let { getReviews } = useContext(reviewContext);


    let [minDate, setMinDate] = useState('');


    useEffect(() => {

        if (getlist && getlist._id) {

            getReviews(getlist._id).then(setLocalRating).catch(console.error);
        }
    }, [getlist]);



    useEffect(() => {
        if (getlist && checkIn && checkOut) {
            let inDate = new Date(checkIn);
            let outDate = new Date(checkOut);
            let n = (outDate - inDate) / (24 * 60 * 60 * 1000);
            setNight(n);

            if (n > 0) {
                let havnlyCharge = getlist.rent * (5 / 100);
                let tax = getlist.rent * (6 / 100);
                let total = getlist.rent * n + havnlyCharge + tax;
                setTotal(parseFloat(total.toFixed(2)));
            } else {
                setTotal(0);
            }
        }
    }, [checkIn, checkOut, getlist, setNight, setTotal]);




    useEffect(() => {
        let today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    }, []);

    if (!getlist) {
        return <div>Loading…</div>;
    }

    const capitalizeFirstChar = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };




    return (
        <div className='relative w-full min-h-screen overflow-x-hidden h-[100vh]'>
            <Nav />
            <div className=" flex flex-col h-[90vh] relative overflow-y-auto scrollbar-hide mt-5">

                <form >
                    <div className="flex flex-col justify-center  md:pt-[20px]  items-center w-[100vw]  h-full  overflow-y-auto   scrollbar-hide">
                        <div>
                            <MdOutlineKeyboardBackspace className='md:left-6 left-1 top-2  md:top-0 my-5 absolute bg-green-900 text-white h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full ' onClick={() => navigate("/")} />
                        </div>
                        <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[90%] my-[5px] md:my-8'>
                            <h1 className='text-[20px] w-full    text-[#272727] md:text-[30px] font-bold text-ellipsis text-nowrap md:overflow-hidden overflow-x-auto scrollbar-hide '>
                                {`The ${getlist.category}  in ${getlist.city} city ${getlist.location}`}
                            </h1>
                        </div>
                        <div className='w-[95%] md:h-[400px] h-[400px] flex items-center justify-center flex-col   md:w-[90%] md:flex-row '>
                            <div className='w-[100%] h-[50%] md:w-[60%] md:h-[100%] rounded-tl-2xl rounded-bl-2xl overflow-hidden flex items-center justify-center border-4 border-[white] '>
                                {getlist.images && getlist.images.length > 0 ? (
                                    <img src={getlist.images[0]} alt="..." className='w-[100%] h-[100%] object-fill' />
                                ) : " "}
                                
                            </div>

                            <div className='w-[100%] h-[35%] flex items-center justify-center md:w-[30%] md:h-[100%]  md:flex-col '>
                                <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-4 border-white rounded-tr-2xl '>
                                    
                                    {getlist.images && getlist.images.length > 1 ? (
                                        <img src={getlist.images[1]} alt="..." className='w-[100%] h-[100%] object-cover' />
                                    ) : " "}
                                </div>
                                
                                {getlist.images && getlist.images.length > 2 && (
                                    <div className='relative w-[100%] h-[100%] overflow-auto flex items-center justify-center border-4 border-white  text-white text-center text-lg font-semibold rounded-br-2xl'>
                                        {/* Show the next image as a background or leave blank */}
                                        <img
                                            src={getlist.images[2]}
                                            alt="More images"
                                            className='w-full h-full object-cover opacity-100 '
                                        />
                                        
                                        <div className='absolute inset-0 flex items-center justify-center  bg-opacity-60  bg-black '>
                                            <p className='bg-white text-black md:p-2 p-1 text-base rounded-lg bottom-2 right-2 absolute'>
                                                {`+${getlist.images.length - 3} more images`}
                                            </p>

                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className='md:w-[90%] w-[80%] flex flex-col md:flex-row justify-center items-start gap-x-10 '>
                            <div className='md:w-[50%]  w-full flex flex-col justify-start items-start  md:p-3 md:mt-10  gap-y-3'>
                                <div className='w-[90%] flex items-start justify-start text-[18px] font-[Serif]  md:w-[100%] md:text-[25px] font-bold'>
                                    {`${getlist.title} in ${getlist.city} city  ,`}
                                </div>
                                <div className='w-[90%] flex items-start justify-start text-[14px] md:w-[80%] md:text-[18px] text-gray-500'>
                                    {`Beds: ${getaminity.beds}  Guests: ${getaminity.guests}   Bedrooms: ${getaminity.bedrooms}  Bathrooms: ${getaminity.bathrooms}`}
                                </div>

                                

                                <div className='w-full md:flex  flex-col border-2  border-gray-300 items-start justify-evenly md:w-[90%] gap-x-10 mt-4 rounded-xl lg:p-5 p-2'>
                                    <p className='lg:w-[60%] w-full flex justify-start items-center font-semibold md:text-[18px] text-[15px]'>One of the most loved homes on Havnly, according to geuest</p>
                                    <div className='flex flex-col pt-2 justify-center items-center'>
                                        <p className='md:text-[22px] text-[15px] font-medium'>
                                            {typeof localRating === 'number'
                                                ? localRating.toFixed(1)
                                                : 'No rating yet'}
                                        </p>
                                        <div className='flex'>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <IoStar
                                                    key={star}
                                                    className={`h-4 w-4 ${localRating >= star ? "text-yellow-400" : "text-gray-300"}`}
                                                />
                                            ))}
                                        </div>

                                        


                                    </div>

                                </div>
                                <div className='w-[95%] flex lg:p-4   items-center  md:w-[80%] lg:mt-10 mt-5  justify-start md:gap-x-10 gap-x-5'>
                                    <FaUser className='lg:h-[50px] lg:w-[50px] w-[40px] h-[40px] text-green-900 rounded-full border-2 border-gray-300 p-1' />
                                    <p className='font-bold lg:text-xl text-base md:text-lg'>
                                        Hosted by {capitalizeFirstChar(getlist?.host?.firstname)} {capitalizeFirstChar(getlist?.host?.lastname)}

                                    </p>
                                    


                                </div>
                                <p className='w-[110%] border-[1px] border-green-900 md:hidden mb-6'></p>
                            </div>
                            <div className='md:w-[45%] w-full h-auto md:p-3   flex-col flex justify-center items-center md:mt-10  rounded-2xl '>
                                <div className='flex flex-col justify-center items-center  md:w-[100%] h-[90%] w-full'>
                                    <div className='  flex flex-col  justify-center items-center border-2 border-gray-200 p-1 w-[100%] rounded-lg shadow-md'>
                                        <div className='my-2'>
                                            <label htmlFor='checkIn' className='mx-4 font-semibold'>Check-In:</label>
                                            <input type='date' id='checkIn' min={minDate} className='border-2 border-gray-200 md:p-2 p-1 rounded-md ' required onChange={(e) => setCheckIn(e.target.value)} value={checkIn} />
                                        </div>
                                        <div className='my-2'>
                                            <label htmlFor='checkOut' className='mx-4 font-semibold'>Check-Out:</label>
                                            <input type='date' id='checkOut' min={minDate} className='border-2 border-gray-200 md:p-2 p-1 rounded-md' required onChange={(e) => setCheckOut(e.target.value)} value={checkOut} />
                                        </div>

                                    </div>
                                    <div className='  flex flex-col  border-2 border-gray-200 p-2 w-[100%] rounded-lg shadow-md my-5'>
                                        <h1 className='font-bold md:text-xl text-base'>Booking Price-</h1>
                                        <div className='my-2 flex  justify-between items-center'>
                                            <p className='mx-4 md:font-semibold'>{`₹${getlist.rent} x ${night} Nights`}</p>
                                            <p className='mx-4 font-semibold text-gray-400'><span>{`₹${getlist.rent * night}`}</span></p>
                                        </div>

                                        <div className='my-2 flex justify-between items-center'>
                                            <p className='mx-4 md:font-semibold '>Tax:</p>
                                            <span className='mx-4 font-semibold text-gray-400'>{getlist.rent * 6 / 100}</span>
                                        </div>
                                        <div className='my-2 flex justify-between items-center'>
                                            <p className='mx-4 md:font-semibold'>Havnly Charge:</p>
                                            <span className='mx-4 font-semibold text-gray-400'>{getlist.rent * 5 / 100}</span>
                                        </div>
                                        <div className='my-2 border-t-2 w-[100%] border-gray-300 flex justify-between items-center '>
                                            <p className='mx-4 font-semibold'> Total amount</p>
                                            <p className='mx-4 font-semibold text-gray-400'>{total}</p>
                                        </div>


                                    </div>
                                    <div className='my-4 w-[100%] flex justify-center'>
                                        <input type='button' value="Reserve" className="bg-green-900 text-white font-semibold md:px-6 px-4 w-[70%] md:py-3 py-2 md:text-lg text-base rounded-full transform transition-transform hover:scale-105"
                                            onClick={async () => {
                                                console.log("Booking ID on click:", getlist._id);
                                                await handleBooking(getlist._id);
                                                navigate("/booked");
                                            }} />
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

            </div >
        </div >
    )
}

export default Viewcarddetails