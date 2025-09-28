import React, { useContext } from 'react'
import { listingContext } from '../context/listauth';
import Progressbar from './progressbar';
import { useNavigate } from 'react-router-dom';

const Finallist = () => {

    let navigate = useNavigate();

    let { title, setTitle,
        description, setDescription,
        city, setCity,
        location, setLocation,
        landmark, setLandmark,
        frontendimages, setFrontendImages,
        rent, setRent,
        category, setCategory,
        handleListing, adding, setAdding } = useContext(listingContext);


    const listingSubmit = async (e) => {
        e.preventDefault();
        handleListing();
        await navigate("/")
    };




    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-start items-center relative bg-[#F5F5DC] ">
                <form onSubmit={listingSubmit}>
                    <div className="flex flex-col justify-center md:pb-[200px] md:pt-[80px] bg-[#F5F5DC] pb-20  pt-10 items-center   max-w-[100%] w-[100%]  h-full  overflow-y-auto overflow-x-auto  scrollbar-hide">
                        <div className='w-[95%] md:w-[80%] my-4 text-[#272727] '>
                            <h1 className=' text-[16px] md:text-[22px] text-center md:text-left flex items-start justify-start font-semibold  '>
                                {`IN ${landmark.toUpperCase()}, ${location.toUpperCase()},${city.toUpperCase()}`}
                            </h1>
                        </div>
                        <div className='w-[95%] h-[400px]  flex items-center justify-center flex-col md:w-[80%] md:flex-row '>
                            <div className='w-[100%] rounded-md  h-[50%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-2 border-[white] '>
                                <img src={frontendimages[0]} alt="" className='w-[100%] h-[100%]' />
                            </div>
                            <div className='w-[100%]  h-[35%] flex items-center justify-center md:w-[30%] md:h-[100%] md:flex-col '>
                                <div className='w-[100%] h-[100%] rounded-md overflow-hidden flex items-center justify-center border-2 border-white'>
                                    <img src={frontendimages[1]} alt="" className='w-[100%] h-[100%]' />
                                </div>
                                <div className='w-[100%] h-[100%] rounded-md overflow-hidden flex items-center justify-center border-2 border-white'>
                                    <img src={frontendimages[2]} alt="" className='w-[100%] h-[100%]' />
                                </div>
                            </div>

                        </div>

                        <div className='w-[90%] my-2 text-center md:text-left md:my-5 flex items-start justify-start font-medium text-[16px] md:w-[80%] md:text-[23px]'>
                            {`${title.toUpperCase()}, ${category.toUpperCase()}, ${landmark.toUpperCase()},`}
                        </div>
                        <div className='w-[90%] text-center md:text-left my-2 text-gray-500 md:my-5 flex items-start justify-start font-medium text-[16px] md:w-[80%] md:text-[23px]'>
                            {`${description.toUpperCase()}`}
                        </div>
                        <div className='w-[90%] text-center md:text-left flex items-start justify-start font-bold text-[16px] md:w-[80%] md:text-[23px] p-4'>
                            {`Rs${rent.toUpperCase()}/day`}

                        </div>
                        <div className='w-[90%] flex items-center justify-center md:mt-5'>
                            <button type='Submit' className='py-[10px]  bg-green-950 text-white text-[15px] md:text-[18px] md:px-[100px] px-[70px] rounded-lg' disabled={adding}>{adding ? "adding..." : "Add Listing"}</button>
                        </div>

                    </div>
                </form>
                <Progressbar to="/" from="/addinfo" step={8} totalSteps={8} />
            </div>
        </div>
    )
}

export default Finallist;