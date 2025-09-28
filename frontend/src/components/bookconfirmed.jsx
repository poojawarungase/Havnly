import React, { useContext, useState } from 'react';
import { GiConfirmed } from "react-icons/gi";
import { bookingContext } from '../context/bookingcontex';

import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Booked = () => {

    let { bookingData } = useContext(bookingContext);
    console.log(bookingData);

    let navigate = useNavigate();



    return (
        <div>
            <div className='w-[100vw] min-h-[100vh] flex items-center justify-center gap-[30px] bg-[#F5F5DC] flex-col'>
                <div>
                    <MdOutlineKeyboardBackspace className='md:left-10 md:top-5 my-5 absolute bg-green-900 text-white md:h-[45px] md:w-[45px] rounded-full  h-[40px] w-[40px] left-5 top-1' onClick={() => navigate("/")} />
                </div>
                <div className='w-[95%] md:max-w-[550px]  md:h-[450px] h-[400px] bg-green-200 items-center justify-center border-[1px] border-[#b5b5b5] flex-col gap-[20px] p-[30px] md:w-[80%] rounded-2xl shadow-lg shadow-gray-400'>
                    <div className='w-[100%] h-[50%] text-[20px] flex items-center justify-center flex-col gap-[20px] font-semibold' >
                        <GiConfirmed className='md:w-[90px] md:h-[90px] h-[60px] w-[60px] text-green-900' />
                        Booking Confirmed

                    </div>
                    <div className='w-[100%] flex items-center justify-between text-[15px]  my-5 md:text-[18px]'>

                        <span className='mx-2 font-medium'>Booking ID:</span>
                        <span>{bookingData._id}</span>
                    </div>
                    <div className='w-[100%] flex items-center justify-between text-[16px] my-5 md:text-[18px]'>

                        <span className='mx-2 font-medium'>Owner details:</span>
                        <span>{bookingData.host?.email}</span>
                    </div>
                    <div className='w-[100%] flex items-center justify-between text-[16px] my-5 md:text-[18px]'>

                        <span className='mx-2 font-medium'>Total Rent:</span>
                        <span>{bookingData.totalRent}</span>
                    </div>


                </div>


                <button className='md:px-[30px] md:py-[10px] bg-green-900 text-white text-[20px] md:w-[18%] px-10 py-2 fond-bold rounded-lg text-nowrap' onClick={async () => {
                    console.log('Navigating to booking id:', bookingData?._id);
                    if (!bookingData?._id) return alert('Booking ID missing!');
                    navigate(`/payment/${bookingData._id}`);
                    
                }}

                >Next</button>


            </div>
        </div >
    )
}

export default Booked;