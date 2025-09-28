import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClear } from 'react-icons/md';
import Bookingcard from './bookingcard';
import { bookingContext } from '../context/bookingcontex';



const Mybooking = () => {
    const { userData } = useContext(userContext);
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    let { cancelBooking } = useContext(bookingContext);

    useEffect(() => {
        if (userData?.booking) {
            const active = userData.booking.filter(b => b.status !== 'cancel');
            setBookings(active);
        }
    }, [userData]);

    if (!userData) {
        return <p>Loading user data...</p>;
    }

    

    const cancel = async (id) => {
        try {
            await cancelBooking(id); 
            setBookings((prev) => prev.filter((b) => b._id !== id)); // remove from local state
        } catch (error) {
            console.error('Cancel failed:', error);
        }
    };

    return (
        <div className="h-[100vh] relative flex flex-col justify-center p-5 md:p-10 items-center bg-[#F5F5DC]">
            {/* Close button */}
            <div>
                <MdOutlineClear
                    className="md:right-5 md:top-5 top-3 right-3 absolute md:h-[50px] md:w-[50px] h-[30px] w-[30px] bg-green-900 rounded-full p-1 text-white cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>

            <h1 className="md:text-4xl text-2xl font-bold mb-5 text-green-900">My Bookings</h1>

            {bookings &&
                <div className="w-full md:max-w-7xl  h-[100vh] overflow-y-auto  space-y-8 ">
                    {bookings.length > 0 ? (
                        bookings
                            .filter(list => list.listing)
                            .map((list) => (

                                <Bookingcard
                                    key={list._id}
                                    id={list._id}
                                    category={list.listing?.category}
                                    city={list.listing?.city}
                                    title={list.listing?.title}
                                    images={list.listing?.images}
                                    rent={list.listing?.rent}
                                    landmark={list.listing?.landmark}
                                    location={list.listing?.location}
                                    amenhost={list.listing?.amenhost}
                                    checkIn={list.checkIn}
                                    checkOut={list.checkOut}
                                    status={list.status}
                                    totalRent={list.totalRent}
                                    description={list.listing?.description}
                                    cancel={cancel}
                                />
                            ))
                    ) : (
                        <p>No listings found or data is not loaded yet.</p>
                       
                    )}
                </div>}
            {!bookings && <p className='font-bold text-green-800 text-2xl'>No booking present...</p>}
        </div>
    );
};

export default Mybooking;
