import React, { useContext } from 'react';
import { userContext } from '../context/user';
import { listingContext } from '../context/listauth';
import { useNavigate } from 'react-router-dom';
import { amenitiesContext } from '../context/amenitiescont';


const Viewlistcard = ({ category, images, city, rent, id }) => {

    let { userData } = useContext(userContext);
    const navigate = useNavigate();

    let { handleviewLists } = useContext(listingContext);
    let { getAmenitieswithid } = useContext(amenitiesContext);

    const showLists = async () => {
        if (userData) {
            handleviewLists(id);
            await getAmenitieswithid(id);

            navigate("/viewcard");
        } else {
            navigate("/login")
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
            <div className='lg:h-[280px] lg:w-[280px] md:h-[300px] md:w-[300px] h-[220px] w-[200px] flex flex-col rounded-xl cursor-pointer bg-green-200 md:p-5 p-2 shadow-xl shadow-black' onClick={showLists} >
                <div className='w-full h-[70%]  rounded-xl overflow-auto flex scrollbar-hide border-2 border-white'>
                    {(images ?? []).map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`image-${index}`} className='w-full flex-shrink-0 object-cover' />
                    ))}
                </div>
                <div className='w-full h-[30%] md:py-2 flex flex-col  px-2 '>
                    <span className='w-[80%] md:text-[18px] text-base  text-ellipsis overflow-hidden md:font-semibold whitespace-nowrap text-black'>
                        {`${toTitleCase(category)} in ${toTitleCase(city)}  city`}
                    </span>

                    <span className='w-[80%] md:text-[16px] text-base text-ellipsis overflow-hidden md:font-semibold whitespace-nowrap text-gray-500'>
                        {`${rent}/day for nights`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Viewlistcard;