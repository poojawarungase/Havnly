import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { listingContext } from '../context/listauth';
import { amenitiesContext } from '../context/amenitiescont';
import { userContext } from '../context/user';
import { GiConfirmed } from "react-icons/gi";
import { bookingContext } from '../context/bookingcontex';
import { IoHeartSharp, IoStar } from "react-icons/io5";
import { wishlistContex } from '../context/wishlistcontex';


const Card = ({ category, images, city, rent, id, isBooked, bookedBy, host, rating }) => {

    const navigate = useNavigate();
    let { userData } = useContext(userContext)
    // let { handleviewLists } = useContext(listingContext);
    let { handleWishlist } = useContext(wishlistContex);
    // let { guestid } = useContext(bookingContext);


    let { getListWithId } = useContext(listingContext);
    let { getAmenitieswithid } = useContext(amenitiesContext);
    let { night } = useContext(bookingContext);


    let bookedById = null;

    if (bookedBy) {
        if (typeof bookedBy === 'object' && bookedBy._id) {
            bookedById = bookedBy._id;
        } else {
            bookedById = bookedBy;
        }
    }

    const usermatched =
        bookedBy &&
        userData &&
        (typeof bookedBy === "object" ? bookedBy._id : bookedBy)?.toString() !== userData?._id?.toString();


   

    const gotowishlist = async (e) => {
        e.stopPropagation();
        if (userData) {
            await handleWishlist(id);
           

            navigate("/wishlist");
        } else {
            navigate("/login");
        }
    }

    const viewLists = async () => {
        if (userData) {
            getListWithId(id);
            await getAmenitieswithid(id);
            navigate("/viewcarddetails");
        } else {
            navigate("/login");
        }

    }


    function toTitleCase(str) {
        if (!str) return '';
        return str
            .split(' ')
            .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
            .join(' ');
    }

    return (
        <div>
            <div className='relative md:h-[260px] h-[220px]  w-[200px]  flex flex-col rounded-xl cursor-pointer mt-4  ' onClick={() => !isBooked ? viewLists() : navigate("/login")}>
                {isBooked && usermatched && < div className='text-green-900 font-semibold bg-white rounded-lg absolute flex items-center justify-center right-2 top-1 gap-[5px] p-[5px]'><GiConfirmed className='text-green-900 ' />Booked</div>}



                {(userData || !userData) && !usermatched && (
                    <IoHeartSharp
                        className='top-1 right-1 text-white absolute h-[25px] w-[25px] transform transition-transform duration-200 hover:text-pink-500 hover:scale-110'
                        onClick={gotowishlist}
                    />
                )}


                

                <div className='w-full h-[70%]  rounded-xl overflow-x-auto flex scrollbar-hide shadow-lg shadow-gray-400'>
                    {(images ?? []).map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`image-${index}`} className='w-full flex-shrink-0 object-cover' />
                    ))}
                </div>
                <div className='w-full h-[30%] py-2 flex justify-between px-1 gap-0.5 '>
                    <div className='flex flex-col  w-[80%]'>
                        <span className='w-[100%] text-[14px] text-ellipsis overflow-hidden font-semibold whitespace-nowrap text-black'>
                            {`${toTitleCase(category)} in ${toTitleCase(city)}  city`}
                        </span>
                        <span className='w-[80%] text-[13px] text-ellipsis overflow-hidden font-semibold whitespace-nowrap text-gray-500'>
                            {`₹${rent} for ${night} nights`}
                        </span>
                    </div>
                    <div className='w-[20%] '>

                        {typeof rating === 'number' ? (
                            <>

                                <p className='text-[14px] my-[1.5px] text-gray-600 font-semibold'>{rating.toFixed(2)}</p>
                                <IoStar className='h-3 w-3 text-gray-500' />

                            </>
                        ) : (
                            <>
                                <p className='text-[14px] text-gray-600 font-semibold'>0.0</p>
                                <IoStar className='h-3 w-3 text-gray-500' />
                            </>
                        )}

                    </div>


                </div>
            </div>
        </div >
    )
}

export default Card;