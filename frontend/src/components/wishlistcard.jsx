import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';



const Wishcard = ({ title, images = [], description, rent, category, remove, city, location, id, amenhost = [] }) => {



    const navigate = useNavigate();


    const handlecancel = async () => {
        await remove(id);

    }


    return (
        <div>
            <div className="w-[100%] md:w-[90%] md:ml-10 justify-center  mb-5 border border-green-200 rounded-lg p-4  flex flex-col items-center shadow-md shadow-black">
                <div>
                    <MdOutlineKeyboardBackspace className="md:left-5 md:top-5 top-3 left-3 absolute md:h-[50px] md:w-[50px] h-[30px] w-[30px] bg-green-900 rounded-full p-1 text-white cursor-pointer"
                        onClick={() => navigate("/")} />
                </div>

                <div className="w-full flex items-start justify-start text-base overflow-x-auto scrollbar-hide md:text-[25px] font-semibold mb-2">
                    <h1 className="text-ellipsis md:overflow-hidden whitespace-nowrap">
                        {`The ${category} in ${city} city, ${location}`}
                    </h1>
                </div>


                <div className="w-full  md:h-[300px] h-[400px] flex flex-col md:flex-row md:gap-4 gap-2">

                    <div className="w-full md:w-[70%] md:h-full h-[40%] overflow-hidden md:border-4 border-white  flex justify-center items-center rounded-md">
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
                            <div className="relative w-full md:h-[48%] h-[50%] md:border-4 border-white overflow-hidden rounded-md">
                                <img
                                    src={images[2]}
                                    alt="More images"
                                    className="w-full h-full object-cover"
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


                <div className="w-full mt-4 text-[16px] md:text-[28px] font-serif">
                    {`${title} in ${city} city`}
                </div>
                <div className="w-full my-2 text-[16px] md:text-[18px]">
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


                <div className="w-full text-green-900 mt-1 md:font-semibold font-normal">
                    Rs {rent}/day
                </div>

                <div className='w-64 text-center  text-white font-bold bg-green-900 p-2 my-5 rounded-lg'>
                    <input type='button' value="Remove" onClick={handlecancel} />
                </div>



            </div>
        </div>
    );
};

export default memo(Wishcard);
