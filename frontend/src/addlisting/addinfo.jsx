import React, { useContext } from 'react'
import Progressbar from './progressbar'
import Pagenav from './pagenav'
import { listingContext } from '../context/listauth'

const Addinfo = () => {

    let { title, setTitle,
        description, setDescription,
        city, setCity,
        location, setLocation,
        landmark, setLandmark,
        rent, setRent,
    } = useContext(listingContext);

    // const listingSubmit = (e) => {
    //     e.preventDefault();
    //     handleListing();
    //    
    // };


    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-center items-center relative py-4 ">

                <div>
                    <Pagenav />
                </div>

                <div className="flex-1 md:mt-[77px] mt-[40px] mb-[40px] md:mb-[75px] py-10   max-w-[900px] w-[90%]  overflow-y-auto scrollbar-hide">
                    
                    <div className='flex flex-col justify-center items-center '>
                        <h2 className='md:text-3xl text-2xl md:font-[Lato] font-semibold '>Now, let's give your place some info</h2>
                        <p className='text-xl  font-[Roboto] text-gray-700'>Share what makes your place special.</p>
                    </div>
                    <div className=' flex flex-col justify-start items-center w-[100%]  my-10 '>
                        <form className='relative  h-auto  md:p-10 p-5 rounded-lg border-2 border-gray-300 md:w-[70%] w-[95%] bg-green-100 ' >
                            <div className='flex flex-col mb-4'>
                                <label htmlFor='title' className='font-bold'>Title:</label>
                                <textarea
                                    className="resize-none border rounded md:p-2 w-[100%] bg-white border-gray-500 "
                                    placeholder="bhk house or title" id='title' value={title} onChange={(e) => setTitle(e.target.value)} required
                                ></textarea>
                            </div>
                            <div className='flex flex-col mb-4 '>
                                <label htmlFor='description' className='font-bold'>Create your description:</label>
                                <textarea
                                    className="resize-none border rounded md:p-2 w-[100%] bg-white border-gray-500"
                                    placeholder="Describe the .. " value={description} onChange={(e) => setDescription(e.target.value)} id='description' required
                                ></textarea>
                            </div>
                            <div className='flex flex-col mb-4 '>
                                <label htmlFor='city' className='font-bold'>City:</label>
                                <input type='text'
                                    className=" border rounded md:p-4 p-3 w-[100%] bg-white border-gray-500"
                                    placeholder="your city....." id="city" value={city} onChange={(e) => setCity(e.target.value)} required
                                />
                            </div>
                            <div className='flex flex-col mb-4 '>
                                <label htmlFor='location' className='font-bold'>Location:</label>
                                <input type='text'
                                    className=" border rounded md:p-4 p-3 w-[100%] bg-white border-gray-500"
                                    placeholder="your location....." value={location} onChange={(e) => setLocation(e.target.value)} id="location" required
                                />
                            </div>
                            <div className='flex flex-col mb-4 '>
                                <label htmlFor='landmark' className='font-bold'>Landmark:</label>
                                <input type='text'
                                    className=" border rounded md:p-4 p-3 w-[100%] bg-white border-gray-500"
                                    placeholder="your nearby place....." value={landmark} onChange={(e) => setLandmark(e.target.value)} id="landmark" required
                                />
                            </div>
                            <div className='flex flex-col mb-4 '>
                                <label htmlFor='rent' className='font-bold'>Rent/day:</label>
                                <input type='text'
                                    className=" border rounded md:p-4 p-3 w-[100%] bg-white border-gray-500"
                                    placeholder="add rent/day..." value={rent} onChange={(e) => setRent(e.target.value)} id="rent" required
                                />
                            </div>

                            
                        </form>
                    </div>

                </div>
            </div>
            <Progressbar to="/finallist" from="/addphoto" step={7} totalSteps={8} />
        </div>
    )
}

export default Addinfo