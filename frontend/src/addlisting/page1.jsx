import React from 'react'
import Progressbar from './progressbar';
import Pagenav from './pagenav';

const Page1 = () => {
    return (
        <div>

            <div>
                <div>
                    <Pagenav />
                </div>

                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-screen md:h-[540px] h-[100vh] py-5   md:px-10 lg:px-30 gap-x-20 '>
                    <div className='md:w-[600px] lg:w-[800px]  lg:p-10 w-screen md:mt-5 lg:pt-40 md:pt-20 px-10 '>
                        <p className='md:text-[18px] text-[12px] font-medium'>Step 1</p>
                        <h1 className='md:text-[30px] lg:text-[40px] text-[25px] font-semibold my-2'>Tell us about your place</h1>
                        <h3 className='md:text-[20px] font-[Helvetica] font-medium' >In this step, we’ll ask what kind of property you’re listing and whether guests will book the whole place or just a room. You’ll also share the location and how many guests your place can accommodate.</h3>
                    </div>
                    <div className='w-screen md:w-[100%] flex justify-center items-center md:pb-5 md:pt-40 mt-10 '>
                        <video
                            data-testid="video-player" autoPlay muted
                            crossOrigin="anonymous"
                            playsInline
                            preload="auto"
                            className="lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[300px] w-[300px] h-[180px] object-cover block md:p-[14px] p-[12px] "
                        >
                            <source
                                src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div>
                    <Progressbar to="/address" from="/" step={1} totalSteps={8}></Progressbar>
                </div>

            </div>





        </div>
    )
}

export default Page1;