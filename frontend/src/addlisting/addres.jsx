import React, { useContext } from 'react'
import Pagenav from './pagenav';
import Progressbar from './progressbar';
import { addressContext } from '../context/addresscontex';

const Address = () => {

    let { country, setCountry,
        state, setState,
        district, setDistrict,
        city, setCity,
        landmark, setLandmark,
        street, setStreet,
        pcode, setPcode,
        handleAddress } = useContext(addressContext);

    const addressSubmit = (e) => {
        if (!country || !state || !district || !city || !pcode) {
            alert("Please fill all required fields.");
            return;
        }
        e.preventDefault();
        handleAddress();
        handleClear();
    };

    const handleClear = () => {
        setCountry("");
        setCity("");
        setDistrict("");
        setLandmark("");
        setState("");
        setStreet("");
        setPcode("");
    }

    return (
        <div>
            <div className="h-[100vh] flex flex-col justify-center items-center relative py-4 ">

                <div>
                    <Pagenav />
                </div>

                <div className="flex-1 md:mt-[77px] mt-[50px] md:mb-[75px] mb-[50px] py-10 md:pl-20 justify-start items-center  max-w-[900px] w-[90%]  overflow-y-auto scrollbar-hide ">
                    <div className='flex   '>
                        <div>
                            <h2 className='md:text-3xl text-2xl font-semibold my-2'>Where's your place located?</h2>
                            <p className='md:text-[22px] text-[20px] font-[Helvetica Neue]  word-spacing mb-6'>Your address is only shared with guests after they’ve made a reservation.</p>
                        </div>



                    </div>
                    <form onSubmit={addressSubmit}>
                        <div className='flex flex-col  w-[100%] max-w-[900px] text-left '>
                            <div>
                                <input type='text' placeholder='Your country' id='country' value={country} className='md:w-[72%] w-[90%] border-[1px] border-gray-500 md:p-3 p-2 rounded-xl ' required onChange={(e) => setCountry(e.target.value)} />
                            </div>
                            <div className='flex flex-col  border-[1px] md:w-[72%] w-[90%] border-gray-500  rounded-md  mt-5'>
                                <div className='border-b-[1px] border-black rounded-t-md'>
                                    <input type='text' placeholder='State/Union territory' id='state' value={state} className='w-[100%] md:p-4 p-3 border-b-1 border-black rounded-t-md' required onChange={(e) => setState(e.target.value)} />
                                </div>
                                <div className='border-b-[1px] border-black'>
                                    <input type='text' placeholder='District' id='district' value={district} className='w-[100%] md:p-4 p-3 border-b-1 border-black  ' required onChange={(e) => setDistrict(e.target.value)} />
                                </div>
                                <div className='border-b-[1px] border-black'>
                                    <input type='text' placeholder='City/town' id='city' value={city} className='w-[100%] md:p-4 p-3  border-b-1 border-black ' required onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div className='border-b-[1px] border-black'>
                                    <input type='text' placeholder='Landmark' id='landmark' value={landmark} className='w-[100%] md:p-4 p-3  border-b-1 border-black ' onChange={(e) => setLandmark(e.target.value)} />
                                </div>
                                <div className='border-b-[1px] border-black'>
                                    <input type='text' placeholder='Street address' id='street' value={street} className='w-[100%] md:p-4 p-3  border-b-1 border-black ' onChange={(e) => setStreet(e.target.value)} />
                                </div>
                                <div className='border-b-[1px] border-black'>
                                    <input type='text' placeholder='PIN Code' id='pincode' value={pcode} className='w-[100%] md:p-4 p-3  border-b-1 border-black rounded-b-md' required onChange={(e) => setPcode(e.target.value)} />
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-[60%] md:w-[40%] bg-green-300 text-green-950 font-[Helvetica]  mt-5 rounded-md'>
                                <button type='Submit' className='p-2 md:text-2xl text-xl'>Submit</button>
                            </div>


                            <div className='flex flex-col'>
                                <div className='my-8'>
                                    <h2 className='md:text-xl text-lg font-[Helvetica Neue]'>Show your specific location</h2>
                                </div>

                                <div className="md:w-[80%] w-[90%] h-[300px] ">
                                    <iframe
                                        title="Google Map - India"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14286599.12314656!2d68.1766458!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff5d8b46d2b%3A0x4cc4dfabc9e832ed!2sIndia!5e0!3m2!1sen!2sin!4v1721468400000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        className='border-0 rounded-lg'
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Progressbar to="/amenities" from="/page1" step={2} totalSteps={8} />
        </div>

    )
}

export default Address;