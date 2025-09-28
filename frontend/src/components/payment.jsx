import React, { useContext, useEffect, useState } from 'react'
import { paymentContext } from '../context/paymentcontex';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardBackspace } from "react-icons/md";

import { userContext } from '../context/user';
import { bookingContext } from '../context/bookingcontex';
import Star from './star';
import { reviewContext } from '../context/reviewcontext';


const Payment = () => {

    const navigate = useNavigate();

    const [transactionId] = useState(() => 'txn_' + crypto.randomUUID());

    const [rotate, setRotate] = useState(false);


    const { userData } = useContext(userContext);

    const {
        setAmount, amount,
        currency, setCurrency,
        paymentMethod, setPaymentmethod, settransId, handlePayment } = useContext(paymentContext);

    const { bookingId } = useParams();
    console.log(bookingId);


    let { bookingData } = useContext(bookingContext);
    let { rating, setRating, comment, setComment,
        handleReview } = useContext(reviewContext);

    const handleStar = async (value) => {
        setRating(value);

    }

    const submitPayment = async () => {

        await handleReview(bookingData?.listing?._id);
        if (bookingId) {
            await handlePayment(bookingId);
        }
        navigate('/');
        setComment("");
        setAmount(0);
        setCurrency("");
        setPaymentmethod("");

    }




    function formatName(name) {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }




    useEffect(() => {
        settransId(transactionId);
        setAmount(bookingData?.totalRent || "");
    }, [transactionId, settransId, bookingData]);


    return (
        <div >
            <div className='flex h-[100vh] w-[100vw] justify-center items-center  flex-col  bg-[#F5F5DC]'>
                <div>
                    <MdOutlineKeyboardBackspace className='md:left-10 md:top-5 left-5 my-5 absolute bg-green-900  text-white md:h-[45px] md:w-[45px] rounded-full h-[40px] w-[40px] ' onClick={() => navigate("/booked")} />
                </div>
                <div className='flex md:flex-row flex-col w-full mt-20  gap-x-10 md:w-[90%] justify-center items-center overflow-y-auto'>
                    <div className='relative flex flex-col  lg:p-10 p-5  w-[95%] md:w-[50%] h-[500px] shadow-lg shadow-gray-300  lg:gap-y-10 gap-y-2  rounded-2xl  bg-green-200 md:h-auto'>
                        <div className=''>
                            <p className='font-bold lg:text-xl text-sm pt-10 md:p-0'>Transaction ID: {transactionId}</p>
                        </div>
                        <div className=' flex flex-col relative'>

                            <div className='relative flex flex-col md:flex-row justify-start gap-x-5 gap-y-2 items-center'>
                                <label className='font-bold lg:text-xl text-sm'>Amount:</label>
                                <input type='text' className='md:w-[30%] md:p-2 p-1 outline-none border-[1px] border-gray-200 rounded-lg ' value={amount || bookingData?.totalRent} onChange={(e) => setAmount(e.target.value)} required />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setRotate(!rotate);
                                    }}
                                
                                >
                                    <div className='flex gap-x-2 bg-white lg:p-2  p-1 rounded-lg'>
                                        <label>Choose currency:</label>
                                        <MdOutlineKeyboardArrowUp className=' h-5 w-5' />
                                    </div>
                                </button>
                                {rotate && <div className='lg:w-[20%] w-[30%] absolute right-5 '>

                                    <select className=' appearance-none w-full border border-gray-300 rounded p-2' value={currency}
                                        onChange={(e) => setCurrency(e.target.value)} required>
                                        <option value="">Select a currency</option>
                                        <option value="usd">USD</option>
                                        <option value="inr">INR</option>
                                        <option value="eur">EUR</option>
                                    </select>
                                </div>}

                            </div>


                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold lg:text-xl text-sm'>How would you like to pay ?</p>
                            <div className='flex md:gap-x-7 gap-x-2 my-5'>
                                <img src='/visa.jpg' className={`lg:h-[80px] lg:w-[80px] md:w-[60px] md:h-[60px] h-[50px] w-[50px] bg-cover shadow-xl shadow-black rounded-full border-lg p-1 ${paymentMethod == "visa" ? "border-2 border-gray-500" : ""}`} onClick={() => setPaymentmethod("visa")} />
                                <img src='/gpay.png' className={`lg:h-[80px] lg:w-[80px] md:w-[60px] md:h-[60px] h-[50px] w-[50px] bg-cover shadow-xl shadow-black rounded-full  p-1 ${paymentMethod == "gpay" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPaymentmethod("gpay")} />
                                <img src='/paypal.webp' className={`lg:h-[80px] lg:w-[80px] md:w-[60px] md:h-[60px] h-[50px] w-[50px] bg-cover shadow-xl shadow-black rounded-full border-lg p-1 ${paymentMethod == "paypal" ? "border-2 border-gray-500" : ""}`} onClick={() => setPaymentmethod("paypal")} />
                                <img src='/phonepay.png' className={`lg:h-[80px] lg:w-[80px] md:w-[60px] md:h-[60px] w-12 h-12 bg-cover shadow-xl shadow-black  rounded-full border-lg p-1 bg-white text-blue-600 ${paymentMethod == "phonepay" ? "border-2 border-gray-500" : ""}`} onClick={() => setPaymentmethod("phonepay")} />
                            </div>


                        </div>
                        <div>
                            <p className='font-bold lg:text-xl text-sm'>Booking ID: {bookingId}</p>
                        </div>
                        <div>
                            <p className='font-bold lg:text-xl text-sm'>Guest name:{formatName(userData.firstname) + "  " + formatName(userData.lastname)}</p>
                        </div>
                    </div>
                    <h1 className=' w-[95%] my-5 md:hidden flex max-w-[550px] md:text-xl text-lg font-semibold  items-center justify-center'>{rating} out of 5 Rating</h1>
                    <div className='w-[95%] lg:max-w-[550px] md:w-[250px] md:min-h-[150px] h-auto p-2  bg-green-300 flex items-center justify-center border border-gray-200 flex-col gap-4 md:p-6  lg:w-[40%]  rounded-lg  shadow-lg shadow-gray-400'>
                        <h1 className=' md:text-xl text-lg font-semibold  items-center justify-center md:block hidden'>{rating} out of 5 Rating</h1>
                        <div className='flex gap-2 '>

                            <Star onRate={handleStar} className='h-[25px] w-[25px] text-yellow-300' />
                        </div>
                        <div className='flex flex-col w-[90%] gap-y-2'>
                            <label className='md:text-xl text-lg font-semibold' htmlFor='comment '>Comment:</label>
                            <input required onChange={(e) => setComment(e.target.value)} value={comment} type='text' placeholder='Comment here...' className='p-2 rounded-lg border-[1px] border-gray-400 w-[100%]' />
                        </div>
                        <button className='px-[30px] md:py-[10px] py-2 bg-green-900 text-white text-[18px] md:px-[30px] lg:px-[100px] rounded-lg text-nowrap' onClick={() => {
                            submitPayment();

                        }}

                        >Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment;