import React from 'react'
import { useNavigate } from 'react-router-dom'

const Progressbar = ({ anyamenities, onNext, placehasoffer, to, from, children, step = 1,
    totalSteps = 8, ...props }) => {
    let navigate = useNavigate();
    const isDisabled = onNext && !placehasoffer && !anyamenities;

    const progress = Math.round((step / totalSteps) * 100);

    const handleOnNext = async () => {
        if (isDisabled) return;
        if (onNext) {
            await onNext();
        }
        navigate(to)
    }
    

    return (
        <div>
            <div >
                <div className='fixed bottom-0 left-0 w-screen bg-white '>
                    <div className='fixed md:bottom-20 bottom-10  left-0 w-full '>
                        <input className='w-[100%]' type='range' min={0} max={100} value={progress} readOnly />
                    </div>

                    <div className='w-[100%] flex justify-between px-10 md:p-5 mt-4'>
                        <a className='font-medium underline md:text-[18px] text-[15px] cursor-pointer py-2' onClick={() => navigate(from)} {...props}>{children}Back</a>
                        <button className={isDisabled ? 'bg-gray-600 text-white md:px-6  px-4  md:py-[10px] py-1.5  rounded-xl text-[18px]' : ' md:px-6 px-4 md:py-[10px] py-1.5  rounded-xl bg-gray-300 font-bold  text-green-950 md:text-[18px] text-[15px] '} onClick={handleOnNext} {...props} disabled={isDisabled}

                        > {children}Next</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Progressbar