import React, { useContext, useEffect, useRef, useState } from 'react'
// import { userContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import { listingContext } from '../context/listauth';
import Nav from '../components/nav';
import { amenitiesContext } from '../context/amenitiescont';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { userContext } from '../context/user';
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
import { AiOutlinePlus } from "react-icons/ai";
import { updateListingContext } from '../context/updatelistcontex';




const Viewcard = () => {
   
    const navigate = useNavigate();
    const fileInputRef = useRef();
    let { userData } = useContext(userContext);
    let { viewlists, deleteLists } = useContext(listingContext);
    let { getaminity } = useContext(amenitiesContext);
    let [updatePopup, setUpdatePopup] = useState(false);
    const [localViewList, setLocalViewList] = useState(null);
    let { UpdateList, title, setTitle,
        description, setDescription,
        frontendimages, setFrontendImages,
        setBackendImages,
        city, setCity,
        location, setLocation,
        landmark, setLandmark,
        rent, setRent,
        category, setCategory } = useContext(updateListingContext)


    useEffect(() => {
        if (viewlists && !localViewList) {
            setLocalViewList(viewlists);
        }
    }, [viewlists, localViewList]);


    if (!localViewList) {
        return <div>Loading…</div>;
    }

    const handleEditClick = (e) => {
        e.preventDefault();
        setUpdatePopup(true);
    };


   

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

    const listingSubmit = async (e) => {
        e.preventDefault();
        await UpdateList(viewlists._id);
        await navigate("/")
    };

    const handleDeleteClick = async () => {

        await deleteLists(viewlists._id);
        await navigate("/");
    }



    return (
        <div className='relative w-full min-h-screen overflow-x-hidden h-[100vh] bg-[#F5F5DC]'>
            <div>
                <Nav />
                <div className=" flex flex-col h-[90vh] relative overflow-y-auto scrollbar-hide mt-5">

                    <form >
                        <div className="flex flex-col justify-center pb-[50px] md:pt-[50px]  items-center   w-screen  h-full  overflow-y-auto  scrollbar-hide  gap-y-5">
                            <div>
                                <MdOutlineKeyboardBackspace className='md:left-6 md:top-5 md:block left-6 top-[-20px] my-5 absolute bg-green-900 text-white h-[40px] w-[40px] rounded-full ' onClick={() => navigate("/mylist")} />
                            </div>
                            <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] md:my-[10px] '>
                                <h1 className='text-[18px]  text-[#272727] md:text-[28px] font-semibold text-ellipsis text-nowrap md:overflow-hidden overflow-x-auto scrollbar-hide w-[100%]'>
                                    {`The ${localViewList.category}  in ${localViewList.city} city ${localViewList.location}`}
                                </h1>
                            </div>
                            <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row '>
                                <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-4 border-[white] rounded-lg'>
                                    {localViewList.images && localViewList.images.length > 0 ? (
                                        <img src={localViewList.images[0]} alt="..." className='w-[100%] h-[100%] object-cover' />
                                    ) : " "}
                                    
                                </div>

                                <div className='w-[100%] h-[35%] flex items-center justify-center md:w-[30%] md:h-[100%] md:flex-col '>
                                    <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-4 border-white rounded-lg'>
                                       
                                        {localViewList.images && localViewList.images.length > 1 ? (
                                            <img src={localViewList.images[1]} alt="..." className='w-[100%] h-[100%] object-cover' />
                                        ) : " "}
                                    </div>
                                   
                                    {localViewList.images && localViewList.images.length > 2 && (
                                        <div className='relative w-[100%] h-[100%] overflow-auto flex items-center justify-center border-4 border-white  text-white text-center text-lg font-semibold rounded-lg'>
                                           
                                            <img
                                                src={localViewList.images[2]}
                                                alt="More images"
                                                className='w-full h-full object-cover opacity-100'
                                            />
                                           
                                            <div className='absolute inset-0 flex items-center justify-center  bg-opacity-60  bg-black '>
                                                <p className='bg-white text-black md:p-2 text-[12px] rounded-lg bottom-2 right-2 absolute'>
                                                    {`+${localViewList.images.length - 3} more images`}
                                                </p>

                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className='w-[95%] flex items-start justify-start text-[18px] font-[Serif] mt-5 md:w-[80%] md:text-[25px]'>
                                {`${localViewList.title} in ${localViewList.city} city  ,`}
                            </div>
                            <div className='w-[95%] flex items-start justify-start text-[15px] md:w-[80%] md:text-[18px] text-gray-500'>
                                {`Beds: ${getaminity.beds}  Guests: ${getaminity.guests}   Bedrooms: ${getaminity.bedrooms}  Bathrooms: ${getaminity.bathrooms}`}
                            </div>
                            <div className='w-[95%] flex items-start justify-start text-[18px] font-[Serif] md:w-[80%] md:text-[22px] '>
                                {`${localViewList.description}`}
                            </div>
                            <div className='w-[95%] flex items-start justify-start font-semibold text-[16px] md:w-[80%] md:text-[16px] text-green-900'>
                                {`Rs ${localViewList.rent}/day`}

                            </div>

                            <div className='grid grid-cols-2 md:gap-32 gap-20 text-center ' >

                                {localViewList.host === userData._id && <button type='button' className='py-[10px]  bg-green-950 text-white text-[18px] md:px-[100px] lg:px-[120px] rounded-lg  md:w-[30%]  flex justify-center items-center px-[30px]' onClick={handleEditClick}>
                                    Edit
                                </button>}


                                {localViewList.host === userData._id && <button className='py-[10px]  px-[30px] bg-green-950 text-white text-[18px] md:px-[100px] lg:px-[120px] rounded-lg md:w-[30%]  flex justify-center items-center' onClick={handleDeleteClick}>
                                    Delete
                                </button>}

                            </div>


                        </div>
                    </form>

                </div >
            </div>

            {updatePopup && <div className='w-full min-h-screen fixed inset-0 z-50 bg-[#000000c9] flex items-start justify-center overflow-y-auto scrollbar-hide pt-16'>
                <div>
                    <MdOutlineKeyboardBackspace className='md:h-[50px] md:w-[50px] h-[40px] w-[40px] bg-white text-black top-5 left-10 rounded-full absolute' onClick={() => setUpdatePopup(false)} />
                    <p className='md:hidden block bg-white absolute top-1'>Scroll Right side</p>
                </div>

                <div className='w-[90%] md:h-[98%]  h-[95%] overflow-x-auto scrollbar-hide '>
                    <div className="flex md:gap-x-20  gap-x-10 p-5 h-full w-max ">
                        <div className='md:h-[100%]  lg:h-[100%] md:w-[430px] lg:w-[460px] text-center  w-[380px] flex-shrink-0 border-2 border-gray-300 bg-green-200 rounded-2xl shadow-xl shadow-black  overflow-y-auto scrollbar-hide pb-3'>

                            <div className='grid grid-cols-3   md:gap-y-5 gap-2  mt-4  '>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md  ${category == "house" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("house")}>
                                    <HiOutlineHome className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>House</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px]  gap-y-2 rounded-md ${category == "flat/apartment" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("flat/apartment")}>
                                    <BsBuildings className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Flat</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "barn" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("barn")} >
                                    <PiBarn className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Barn</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px]  gap-y-2 rounded-md ${category == "bed/breakfast" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("bed/breakfast")}>
                                    <BsCupHot className=' h-5 w-5  text-green-950  ' />
                                    <p className='text-[14px]'>Breakfast</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "boat" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("boat")}>
                                    <PiSailboat className=' h-5 w-5  text-green-950  ' />
                                    <p className='text-[14px]'>Boat</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px]  gap-y-2 rounded-md ${category == "cabin" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("cabin")}>
                                    <GiWoodCabin className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Cabin</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px]  gap-y-2 rounded-md ${category == "castle" ? "border-2 border-gray-500" : ""} `} onClick={() => setCategory("castle")}>
                                    <LuCastle className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Castle</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "cave" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("cave")}>
                                    <GiCaveEntrance className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Cave</p>
                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px]  gap-y-2 rounded-md ${category == "dome" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("dome")}>
                                    <GiBaseDome className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Dome</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "hotel" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("hotel")}>
                                    <LuHotel className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Hotel</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "houseboat" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("houseboat")}>
                                    <MdOutlineHouseboat className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Houseboat</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "tent" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tent")}>
                                    <LuTentTree className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Tent</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "tower" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tower")}>
                                    <LuTowerControl className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Tower</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "tiny home" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tiny home")}>
                                    <HiHomeModern className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Tiny Home</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md ${category == "tree house" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("tree house")}>
                                    <GiTreehouse className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Tree House</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px]  gap-y-2 rounded-md ${category == "windmill" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("windmill")}>
                                    <PiWindmillBold className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Windmill</p>

                                </div>
                                <div className={`flex flex-col justify-start items-start p-3 border-[1px] border-gray-300 w-[100px] h-[80px] gap-y-2 rounded-md  ${category == "farm house" ? "border-2 border-gray-500" : ""}`} onClick={() => setCategory("farm house")}>
                                    <GiGreenhouse className=' h-5 w-5 text-green-950  ' />
                                    <p className='text-[14px]'>Farm House</p>

                                </div>

                            </div>

                        </div>
                        <div className='h-[100%] md:w-[500px] w-[280px] flex-shrink-0 p-5 border-2 border-gray-300 bg-green-200 rounded-2xl shadow-xl shadow-black overflow-y-auto scrollbar-hide'>
                            <div className='md:w-[100%] md:h-[50%] py-2 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl '>
                                {frontendimages.length === 0 ? (
                                    <div className='flex flex-col justify-center items-center gap-y-5'>
                                        <img src='./camera.jpeg' className='lg:h-[160px] lg:w-[160px] h-[140px] w-[140px] object-contain border-[1px] shadow-2xl bg-gray-300 rounded-[50%]' />
                                        <button className='border-[1px] border-black md:p-2 p-1 rounded-md ' onClick={handleButtonClick}>
                                            Add Photos
                                        </button>
                                    </div>) : (
                                    <div className='flex justify-center items-center md:h-[420px] '>

                                        <img

                                            src={frontendimages[0]}
                                            className=' w-full h-full object-cover border-[1px] rounded-lg'
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
                            {frontendimages.length > 1 && <div className='grid grid-cols-2 gap-5'>
                                {frontendimages.slice(1).map((img, idx) => (
                                    <div key={idx} className='md:w-[200px] md:h-[160px] w-[120px] h-[120px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl mt-5'>
                                        <img
                                            src={img}
                                            className='w-full h-full object-cover border-[1px] rounded-lg '
                                            alt={`Preview ${idx + 1}`}
                                        />

                                    </div>
                                ))}
                                <div
                                    className='md:w-[200px]  md:h-[160px] w-[120px] h-[120px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl cursor-pointer mt-5'
                                    onClick={handleButtonClick}
                                >
                                    <AiOutlinePlus className='h-[25px] w-[25px] text-green-950 ' />
                                    <p>Add more</p>
                                </div>
                            </div>
                            }
                            {frontendimages.length === 1 && (
                                <div className='md:w-[200px]  md:h-[160px] w-[120px] h-[120px] bg-gray-50 flex flex-col justify-center items-center border-[1px] border-gray-500 border-dashed rounded-xl mt-5'>
                                    <AiOutlinePlus className='h-[25px] w-[25px] text-green-950 ' onClick={handleButtonClick} /><p>Add more</p>
                                </div>
                            )}
                        </div>
                        <div className='h-[100%] md:w-[500px] w-[300px] flex-shrink-0 p-3 border-2 border-gray-300 bg-green-200 rounded-2xl shadow-xl shadow-black overflow-y-auto scrollbar-hide'>

                            <form className='relative  h-auto  md:p-10 p-2 w-[95%] ' onSubmit={listingSubmit} >
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor='title' className='font-bold'>Title:</label>
                                    <textarea
                                        className="resize-none border rounded  w-[100%] bg-white border-gray-500"
                                        placeholder="bhk house or title" id='title' value={title} onChange={(e) => setTitle(e.target.value)} required
                                    ></textarea>
                                </div>
                                <div className='flex flex-col mb-3 '>
                                    <label htmlFor='description' className='font-bold'>Create your description:</label>
                                    <textarea
                                        className="resize-none border rounded p-1 w-[100%] bg-white border-gray-500"
                                        placeholder="Describe the .. " value={description} onChange={(e) => setDescription(e.target.value)} id='description' required
                                    ></textarea>
                                </div>
                                <div className='flex flex-col mb-3 '>
                                    <label htmlFor='city' className='font-bold'>City:</label>
                                    <input type='text'
                                        className=" border rounded p-2 w-[100%] bg-white border-gray-500"
                                        placeholder="your city....." id="city" value={city} onChange={(e) => setCity(e.target.value)} required
                                    />
                                </div>
                                <div className='flex flex-col mb-3 '>
                                    <label htmlFor='location' className='font-bold'>Location:</label>
                                    <input type='text'
                                        className=" border rounded p-2 w-[100%] bg-white border-gray-500"
                                        placeholder="your location....." value={location} onChange={(e) => setLocation(e.target.value)} id="location" required
                                    />
                                </div>
                                <div className='flex flex-col mb-3 '>
                                    <label htmlFor='landmark' className='font-bold'>Landmark:</label>
                                    <input type='text'
                                        className=" border rounded p-2 w-[100%] bg-white border-gray-500"
                                        placeholder="your nearby place....." value={landmark} onChange={(e) => setLandmark(e.target.value)} id="landmark" required
                                    />
                                </div>
                                <div className='flex flex-col mb-3 '>
                                    <label htmlFor='rent' className='font-bold'>Rent/day:</label>
                                    <input type='text'
                                        className=" border rounded p-2 w-[100%] bg-white border-gray-500"
                                        placeholder="add rent/day..." value={rent} onChange={(e) => setRent(e.target.value)} id="rent" required
                                    />
                                </div>

                                <div className='flex flex-col mb-4 '>

                                    <button type='Submit' className='border rounded p-[7px] md:w-[50%] w-full bg-green-900 border-gray-500 text-white font-semibold"
                                    required'>Update Listing</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
            }
        </div >
    )
}

export default Viewcard;