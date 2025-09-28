import React, { useContext, useRef, useState } from 'react'
import Progressbar from './progressbar';
import Pagenav from './pagenav';
import { RiCameraAiLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { listingContext } from '../context/listauth';

const Addphoto = () => {
    const fileInputRef = useRef(null);


    let { frontendimages, setFrontendImages,
        backendimages, setBackendImages, } = useContext(listingContext);

    const handleButtonClick = (e) => {
        e.preventDefault();

        fileInputRef.current.click();
    };



    const handleImages = (e) => {
        const files = Array.from(e.target.files);
        setBackendImages(prev => [...prev, ...files]);
        const newImageURLs = files.map(file => URL.createObjectURL(file));
        setFrontendImages(prev => [...prev, ...newImageURLs])

    };
    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-center items-center relative py-4 ">

                <div>
                    <Pagenav />
                </div>

                <div className="flex-1 md:mt-[77px] mt-[40px]  md:mb-[75px] mb-[50px] py-10 md:pl-20  justify-center  items-center max-w-[900px] w-[90%]  overflow-y-auto scrollbar-hide ">
                    <div className='w-[90%] flex flex-col py-3 justify-center items-center '>
                        <p className='md:text-3xl text-2xl py-2 font-[Helvetica]'>Add some photos of your category</p>
                        <p className='md:text-2xl text-xl font-[Roboto] text-gray-700'>You'll need 3 photos to get started.</p>
                    </div>
                    <div className='md:w-[90%] w-full flex flex-col py-3 justify-center items-center gap-y-10 '>
                        <div className='md:w-[620px] md:h-[420px] h-[280px] w-[250px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl '>
                            {frontendimages.length === 0 ? (
                                <div className='flex flex-col justify-center items-center gap-y-5'>
                                    <img src='./camera.jpeg' className=' h-[150px] w-[150px]  md:h-[200px] md:w-[200px] object-contain border-[1px] shadow-2xl bg-gray-300 rounded-[50%]' />
                                    <button className='border-[1px] border-black md:p-2 p-1 rounded-md' onClick={handleButtonClick}>
                                        Add Photos
                                    </button>
                                </div>) : (
                                <div className='flex justify-center items-center h-[420px] '>

                                    <img

                                        src={frontendimages[0]}
                                        className=' w-[100%] h-[100%] object-cover border-[1px] rounded-lg'
                                        alt='image1'
                                    />


                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImages}
                                hidden
                                multiple
                                accept="image/*"
                            />
                        </div>
                        {frontendimages.length > 1 && <div className='grid grid-cols-2 md:gap-5 gap-4'>
                            {frontendimages.slice(1).map((img, idx) => (
                                <div key={idx} className='md:w-[280px] md:h-[200px] h-[120px] w-[120px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl '>
                                    <img
                                        src={img}
                                        className='w-full h-full object-cover border-[1px] rounded-lg'
                                        alt={`Preview ${idx + 1}`}
                                    />
                                   
                                </div>
                            ))}
                            <div
                                className='md:w-[280px] md:h-[200px] h-[120px] w-[120px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl cursor-pointer'
                                onClick={handleButtonClick}
                            >
                                <AiOutlinePlus className='h-[35px] w-[35px] text-green-950' />
                                <p>Add more</p>
                            </div>
                        </div>
                        }

                        {frontendimages.length === 1 && (
                            <div className='md:w-[280px] md:h-[200px] h-[120px] w-[120px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl '>
                                <AiOutlinePlus className='h-[35px] w-[35px] text-green-950' onClick={handleButtonClick} /><p>Add more</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <Progressbar to="/addinfo" from="/category" step={6} totalSteps={8} />
        </div>
    )
}

export default Addphoto;