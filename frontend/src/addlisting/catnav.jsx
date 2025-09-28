import React, { useContext, useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { BsBuildings } from "react-icons/bs";
import { PiSailboat } from "react-icons/pi";
import { GiWoodCabin } from "react-icons/gi";
import { LuCastle } from "react-icons/lu";
import { LuHotel } from "react-icons/lu";
import { MdOutlineHouseboat } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { LuTowerControl } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";
import { GiTreehouse } from "react-icons/gi";
import { GiGreenhouse } from "react-icons/gi";
import { listingContext } from '../context/listauth';
import { FaFire } from "react-icons/fa";

const Catnav = () => {

    let [cate, setCate] = useState()
    let { getlisting, setNewListingData } = useContext(listingContext);

    const handleCategory = (category) => {
        setCate(category)
        if (category == "trending") {
            setNewListingData(getlisting)
        } else {
            setNewListingData(getlisting.filter((list) => list.category == category))
        }
    }

    return (
        <div>
            <div className='flex justify-center items-center xl:gap-x-10 md:mt-5  pl-11 my-5  w-full overflow-x-auto md:gap-x-6 gap-x-4 scrollbar-hide sm:bottom-shadow pb-2'>
                <div className='flex flex-col justify-center items-center ' onClick={() => { handleCategory("trending"); setCate("") }}>
                    <FaFire className=' md:h-7 md:w-7 w-6 h-6 text-green-950    ' />
                    <p className='md:text-[16px] text-[12px]'>Trending</p>
                </div>
                <div className={`md:flex-col justify-center items-center  xl:block hidden ${cate == "flat/apartment" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("flat/apartment")}>
                    <BsBuildings className=' md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Flat/Apartment</p>
                </div>
                <div className={`flex flex-col justify-center items-center ${cate == "house" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("house")}>
                    <HiOutlineHome className=' md:h-7 md:w-7 w-6 h-6 text-green-950    ' />
                    <p className='md:text-[16px] text-[12px]'>House</p>
                </div>
                <div className={`flex flex-col justify-center items-center ${cate == "boat" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("boat")}>
                    <PiSailboat className=' md:h-7 md:w-7 w-6 h-6 text-green-950  ' />
                    <p className='md:text-[16px] text-[12px]'>Boat</p>
                </div>
                <div className={`flex flex-col justify-center items-center ${cate == "cabin" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("cabin")}>
                    <GiWoodCabin className=' md:h-7 md:w-7 w-6 h-6 text-green-950  ' />
                    <p className='md:text-[16px] text-[12px]'>Cabin</p>
                </div>
                <div className={`flex flex-col justify-center items-center ${cate == "castle" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("castle")}>
                    <LuCastle className='md:h-7 md:w-7 w-6 h-6 text-green-950 ' />
                    <p className='md:text-[16px] text-[12px]'>Castle</p>
                </div>
                <div className={`flex flex-col justify-center items-center ${cate == "hotel" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("hotel")}>
                    <LuHotel className=' md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Hotel</p>
                </div>
                <div className={`md:flex-col justify-center items-center md:block hidden ${cate == "houseboat" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("houseboat")}>
                    <MdOutlineHouseboat className=' md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Houseboat</p>
                </div>
                <div className={`flex flex-col justify-center items-center ${cate == "tent" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("tent")}>
                    <LuTentTree className='md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Tent</p>
                </div>
                <div className={`md:flex-col justify-center items-center lg:block hidden ${cate == "tiny home" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("tiny home")}>
                    <HiHomeModern className=' md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Tiny Home</p></div>
                <div className={`md:flex-col justify-center items-center lg:block hidden ${cate == "tree house" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("tree house")}>
                    <GiTreehouse className=' md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Tree House</p></div>
                <div className={`md:flex-col justify-center items-center lg:block hidden ${cate == "farm house" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("farm house")}>
                    <GiGreenhouse className=' md:h-7 md:w-7 w-6 h-6 text-green-950   ' />
                    <p className='md:text-[16px] text-[12px]'>Farm House</p></div>
                <div className={`flex flex-col justify-center items-center ${cate == "tower" ? "border-b-[3px] border-green-200" : ""}`} onClick={() => handleCategory("tower")}>
                    <LuTowerControl className=' md:h-7 md:w-7 w-6 h-6 text-green-950    ' />
                    <p className='md:text-[16px] text-[12px]'>Tower</p></div>

            </div>
        </div>
    )
}

export default Catnav;