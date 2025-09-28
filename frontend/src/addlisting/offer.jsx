import React, { useContext } from 'react'
import Pagenav from './pagenav'
import Progressbar from './progressbar';
import { IoWifi } from "react-icons/io5";
import { LuTvMinimal } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";
import { LuWashingMachine } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { PiSwimmingPool } from "react-icons/pi";
import { MdOutlineHotTub } from "react-icons/md";
import { LuPiano } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { GiFireplace } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { FaHouseFloodWater } from "react-icons/fa6";
import { FaShower } from "react-icons/fa";
import { TbAlarmSmoke } from "react-icons/tb";
import { PiFirstAidKit } from "react-icons/pi";
import { PiFireExtinguisher } from "react-icons/pi";
import { amenitiesContext } from '../context/amenitiescont';

const Offer = () => {

    let { anyamenities, setAnyamenities,
        placehasoffer, setPlaceHasOffer,
        handleAmenities } = useContext(amenitiesContext);

    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-center items-center relative py-4 ">

                <div>
                    <Pagenav />
                </div>

                <div className="flex-1 md:mt-[77px] mt-[50px] md:mb-[75px] mb-[50px] py-10   max-w-[900px] w-[90%]  overflow-y-auto scrollbar-hide">
                    <div className='flex flex-col justify-center items-center gap-y-10 '>
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold'>Tell guests what your place has to offer</h2>
                            <p></p>
                        </div>
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-8  '>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]  gap-y-2 rounded-md ${placehasoffer == "wifi" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("wifi")}>
                                <IoWifi className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Wifi</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px] gap-y-2 rounded-md ${placehasoffer == "tv" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("tv")}>
                                <LuTvMinimal className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>TV</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[110px] gap-y-2 rounded-md ${placehasoffer == "kitchen" ? "border-[1px] border-gray-500" : ""} `} onClick={() => setPlaceHasOffer("kitchen")}>
                                <FaKitchenSet className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Kitchen</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[140px] gap-y-2 rounded-md ${placehasoffer == "washing machine" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("washing machine")}>
                                <LuWashingMachine className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Washing Machine</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]gap-y-2 rounded-md ${placehasoffer == "free parking" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("free parking")}>
                                <IoCarOutline className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Free parking</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]gap-y-2 rounded-md ${placehasoffer == "air conditioning" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("air conditioning")}>
                                <TbAirConditioning className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Air conditioning</p>
                            </div>
                        </div>
                        <div>
                            <p className='md:text-2xl text-xl font-[Helvetica]'>Do you have any  amenities?</p>
                        </div>
                        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4'>

                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px] gap-y-2 rounded-md ${anyamenities == "pool" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("pool")}>
                                <PiSwimmingPool className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Pool</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px] gap-y-2 rounded-md ${anyamenities == "hot tub" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("hot tub")}>
                                <MdOutlineHotTub className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Hot Tub</p>
                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[110px] gap-y-2 rounded-md ${anyamenities == "piano" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("piano")}>
                                <LuPiano className='md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Piano</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[140px] gap-y-2 rounded-md ${anyamenities == "exercise equipment" ? "border-[1px] border-gray-500" : ""} `} onClick={() => setAnyamenities("exercise equipment")}>
                                <CiDumbbell className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px] '>Exercise equipment</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[130px] gap-y-2 rounded-md ${anyamenities == "indoor fireplace" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("indoor fireplace")}>
                                <GiFireplace className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Indoor Fireplace</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[110px] gap-y-2 rounded-md ${anyamenities == "beach" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("beach")}>
                                <GiPalmTree className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Beach</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[110px] gap-y-2 rounded-md ${anyamenities == "lake" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("lake")}>
                                <FaHouseFloodWater className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Lake</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[130px] gap-y-2 rounded-md ${anyamenities == "outdoor " ? "border-[1px] border-gray-500" : ""}`} onClick={() => setAnyamenities("outdoor shower")}>
                                <FaShower className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Outdoor shower</p>

                            </div>
                        </div>
                        <div>
                            <p className='md:text-2xl text-xl font-[Helvetica]'>Do you have any of these safety items?</p>
                        </div>
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-8 '>

                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px] gap-y-2 rounded-md ${placehasoffer == "smoke alarm" ? "border-[1px] border-gray-500" : ""} `} onClick={() => setPlaceHasOffer("smoke alarm")}>
                                <TbAlarmSmoke className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Smoke alarm</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[120px]gap-y-2 rounded-md ${placehasoffer == "first aid kit" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("first aid kit")}>
                                <PiFirstAidKit className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>First aid kit</p>

                            </div>
                            <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 md:w-[180px] md:h-[100px] h-[80px] w-[140px] gap-y-2 rounded-md ${placehasoffer == "fire Extingusisher" ? "border-[1px] border-gray-500" : ""}`} onClick={() => setPlaceHasOffer("fire Extingusisher")}>
                                <PiFireExtinguisher className=' md:h-9 md:w-9 h-8 w-8 text-green-950  ' />
                                <p className='md:text-[18px] text-[14px]'>Fire Extingusisher</p>

                            </div>

                        </div>
                    </div>
                </div>
                <div>

                </div>
                <Progressbar anyamenities={anyamenities} placehasoffer={placehasoffer} to="/category" from="/amenities" onNext={handleAmenities} step={4} totalSteps={8} />
            </div>
        </div>
    )
}

export default Offer;