import React from 'react'
import { useNavigate } from 'react-router-dom';

const Pagenav = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='fixed top-0 left-0  w-screen z-50  flex justify-between items-center bg-white border-[1px] px-10 py-4 '>
                <div>
                    <img className='md:h-[60px] md:w-[60px] h-[40px] w-[40px]' src='./hlogo.jpg'></img>
                </div>
                <div>
                    <button className='md:p-2 p-[5px] border-[1px] border-gray-200 rounded-3xl font-medium text-[14px] ' onClick={() => navigate("/")}>Save & Exit</button>
                </div>
            </div>
        </div>
    )
}

export default Pagenav;