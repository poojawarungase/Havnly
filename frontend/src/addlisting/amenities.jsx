import React, { useContext, useState } from 'react'
import Pagenav from './pagenav'
import Progressbar from './progressbar';
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { amenitiesContext } from '../context/amenitiescont';


const Amenities = () => {

    let { guests, setGuests,
        bedrooms, setBedrooms,
        beds, setBeds,
        bathrooms, setBathrooms,
    } = useContext(amenitiesContext);


    const handleIncrement = (setter, value) => {
        setter(value + 1)
    }


    const handleDecreament = (setter, value) => {
        setter(value > 1 ? value - 1 : 1);
    }

    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-center items-center relative py-4 ">

                <div>
                    <Pagenav />
                </div>

                <div className="flex-1 md:mt-[77px] mt-[50px] mb-[75px] py-10     max-w-[950px] w-[90%]  overflow-y-auto scrollbar-hide ">
                    <div className='w-[100%] flex flex-col gap-y-2 justify-center items-center '>
                        <h1 className='md:text-3xl text-2xl font-[Lato]'>Add some basics about your place</h1>
                        <p className='md:text-xl text-lg font-[Roboto] text-gray-700'>You'll add more details later, such as bed types.</p>
                    </div>
                    <div className='flex flex-col w-[100%] justify-center items-center '>
                        <div className='flex  border-b-[1px] border-gray-300 py-8 w-[60%] justify-between items-center'>
                            <div>
                                <p className='md:text-xl text-md ' id='guests '>Guests</p>
                            </div>
                            <div className='flex md:gap-x-4 gap-x-2 justify-center items-center'>
                                <HiOutlineMinusSm id='guests' className='border-[1px]  rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleDecreament(setGuests, guests)} aria-disabled={guests <= 1} style={{ opacity: guests <= 1 ? 0.5 : 1 }} />
                                <p className='text-[18px]' >{guests}</p>

                                <FiPlus id='guests' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleIncrement(setGuests, guests)} />
                            </div>

                        </div>
                        <div className='flex  border-b-[1px] border-gray-300 py-8 w-[60%] justify-between items-center'>
                            <div>
                                <p className='md:text-xl text-md mr-8' id='bedrooms'>Bedrooms</p>
                            </div>
                            <div className='flex md:gap-x-4 gap-x-2 justify-center items-center'>
                                <HiOutlineMinusSm id='bedrooms' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleDecreament(setBedrooms, bedrooms)} aria-disabled={bedrooms <= 0} style={{ opacity: bedrooms <= 0 ? 0.5 : 1 }} />
                                <p className='text-[18px]'>{bedrooms}</p>

                                <FiPlus id='bedrooms' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleIncrement(setBedrooms, bedrooms)} />
                            </div>

                        </div>
                        <div className='flex  border-b-[1px] border-gray-300 py-8 w-[60%] justify-between items-center'>
                            <div>
                                <p id='beds' className='md:text-xl text-md'>Beds</p>
                            </div>
                            <div className='flex md:gap-x-4 gap-x-2 justify-center items-center'>
                                <HiOutlineMinusSm id='beds' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleDecreament(setBeds, beds)} aria-disabled={beds <= 1} style={{ opacity: beds <= 1 ? 0.5 : 1 }} />
                                <p className='text-[18px]' >{beds}</p>

                                <FiPlus id='beds' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleIncrement(setBeds, beds)} />
                            </div>

                        </div>
                        <div className='flex  py-8 w-[60%] justify-between items-center '>
                            <div >
                                <p id='bathrooms' className='md:text-xl text-md mr-8'>Bathrooms</p>
                            </div>
                            <div className='flex md:gap-x-4  gap-x-2 justify-center items-center'>
                                <HiOutlineMinusSm id='bathrooms' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px]  p-1 text-green-950' onClick={() => handleDecreament(setBathrooms, bathrooms)} aria-disabled={bathrooms <= 1} style={{ opacity: beds <= 1 ? 0.5 : 1 }} />
                                <p className='text-[18px]'>{bathrooms}</p>

                                <FiPlus id='bathrooms' className='border-[1px] rounded-full md:h-[30px] md:w-[30px] h-[27px] w-[27px] p-1 text-green-950' onClick={() => handleIncrement(setBathrooms, bathrooms)} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Progressbar to="/offer" from="/address" step={3} totalSteps={8} />
        </div>
    )
}

export default Amenities;