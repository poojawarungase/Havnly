import React from 'react';
import { MdOutlineLanguage } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Assistant from './assistant';

const Footer = () => {
    return (
        <div>
            <div className='h-[100vh] lg:h-[40vh] md:h-[40vh]  w-[100vw] bg-gray-100 flex flex-col justify-center items-center md:justify-evenly'>
                <div className='md:grid md:grid-cols-3 md:gap-10 flex flex-col justify-center lg:gap-40 items-center lg:h-[70%] h-[70%] py-5'>
                    <div className='py-2' >
                        <h1 className='font-semibold text-xl lg:text-2xl'>Support</h1>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Help Center</p>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Disability Support</p>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Cancellation Options</p>

                    </div>
                    <div className='py-2'>
                        <h1 className='font-semibold text-xl lg:text-2xl'>Hosting</h1>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Havnly your Home</p>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Hosting Resources</p>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Hosting Responsibly</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='font-semibold text-xl lg:text-2xl'>Havnly</h1>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>2025 Summer Release</p>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Careers</p>
                        <p className='text-[15px] py-1 text-gray-700 lg:text-lg'>Investors</p>
                    </div>
                </div>
                <div className='md:flex md:justify-between flex-col pt-8  lg:h-[30%] h-[30%]  px-10'>
                    <div className='my-5'>
                        <p className='text-gray-800 lg:text-lg'>&copy;2025 Havnly,Inc.  Privacy | Terms | sitemap | Company Details</p>
                    </div>
                    <div className='flex gap-x-4'>
                        <div className='flex justify-center items-center gap-x-2'>
                            <MdOutlineLanguage className='h-5 w-5' />
                            <p>English(IN)</p>
                        </div>
                        <div className='flex justify-center items-center gap-x-2'>
                            <BiRupee className='h-5 w-5'/>
                            <p>INR</p>
                        </div>
                        <div className='flex justify-center items-center gap-x-2'>
                            <GrFacebookOption className='h-4 w-4' />
                            <FaInstagram className='h-4 w-4'/>
                            <FaXTwitter className='h-4 w-4'/>
                        </div>
                    </div>
                </div>
                {/* <Assistant/> */}
            </div>
            
        </div>
    )
}

export default Footer
