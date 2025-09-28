import React, { useContext } from 'react'
import Pagenav from './pagenav.jsx'
import Progressbar from './progressbar.jsx'
import { HiOutlineHome } from "react-icons/hi";
import { BsBuildings } from "react-icons/bs";
import { PiBarn } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { PiSailboat } from "react-icons/pi";
import { GiWoodCabin } from "react-icons/gi";
import { LuCastle } from "react-icons/lu";
import { GiCaveEntrance } from "react-icons/gi";
import { GiBaseDome } from "react-icons/gi";
import { LuHotel } from "react-icons/lu";
import { MdOutlineHouseboat } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { LuTowerControl } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";
import { GiTreehouse } from "react-icons/gi";
import { PiWindmillBold } from "react-icons/pi";
import { GiGreenhouse } from "react-icons/gi";
import { listingContext } from '../context/listauth.jsx';

const Category = () => {

    let { category, setCategory } = useContext(listingContext);

    return (
        <div className="h-[100vh] flex flex-col justify-center items-center relative py-4 ">

            <div>
                <Pagenav />
            </div>

            <div className="flex-1 md:mt-[77px] mt-[50px] md:mb-[75px] mb-[50px] py-10   max-w-[900px] w-[90%]  overflow-y-auto scrollbar-hide">
                <div className='flex flex-col justify-center items-center gap-y-10 '>
                    <div>
                        <h2 className='md:text-3xl text-xl font-semibold'>Which of these best describes your place?</h2>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-2 gap-8 '>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md  ${category == "house" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("house")}>
                            <HiOutlineHome className=' md:h-9 md:w-9 h-8 w-8 text-green-950   ' />
                            <p className='md:text-[18px] text-[14px]'>House</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "flat/apartment" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("flat/apartment")}>
                            <BsBuildings className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Flat/Apartment</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "barn" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("barn")} >
                            <PiBarn className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Barn</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "bed/breakfast" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("bed/breakfast")}>
                            <BsCupHot className=' md:h-9 md:w-9 h-8 w-8 text-green-950   ' />
                            <p className='md:text-[18px] text-[14px]'>Bed/Breakfast</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "boat" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("boat")}>
                            <PiSailboat className='md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Boat</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "cabin" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("cabin")}>
                            <GiWoodCabin className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Cabin</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "castle" ? "border-2 border-gray-500" : ""} `} onClick={() => setCategory("castle")}>
                            <LuCastle className='md:h-9 md:w-9 h-8 w-8 text-green-950   ' />
                            <p className='md:text-[18px] text-[14px]'>Castle</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "cave" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("cave")}>
                            <GiCaveEntrance className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Cave</p>
                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "dome" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("dome")}>
                            <GiBaseDome className=' md:h-9 md:w-9 h-8 w-8 text-green-950 ' />
                            <p className='md:text-[18px] text-[14px]'>Dome</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "hotel" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("hotel")}>
                            <LuHotel className=' md:h-9 md:w-9 h-8 w-8 text-green-950   ' />
                            <p className='md:text-[18px] text-[14px]'>Hotel</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "houseboat" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("houseboat")}>
                            <MdOutlineHouseboat className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Houseboat</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "tent" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tent")}>
                            <LuTentTree className='md:h-9 md:w-9 h-8 w-8 text-green-950 ' />
                            <p className='md:text-[18px] text-[14px]'>Tent</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "tower" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tower")}>
                            <LuTowerControl className=' md:h-9 md:w-9 h-8 w-8 text-green-950   ' />
                            <p className='md:text-[18px] text-[14px]'>Tower</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "tiny home" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tiny home")}>
                            <HiHomeModern className=' md:h-9 md:w-9 h-8 w-8 text-green-950 ' />
                            <p className='md:text-[18px] text-[14px]'>Tiny Home</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "tree house" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tree house")}>
                            <GiTreehouse className=' md:h-9 md:w-9 h-8 w-8 text-green-950 ' />
                            <p className='md:text-[18px] text-[14px]'>Tree House</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${category == "windmill" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("windmill")}>
                            <PiWindmillBold className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Windmill</p>

                        </div>
                        <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md  ${category == "farm house" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("farm house")}>
                            <GiGreenhouse className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                            <p className='md:text-[18px] text-[14px]'>Farm House</p>

                        </div>

                    </div>
                </div>
            </div>
            <div>

            </div>
            <Progressbar to="/addphoto" from="/offer" step={5} totalSteps={8}></Progressbar>
        </div>
    )
}

export default Category