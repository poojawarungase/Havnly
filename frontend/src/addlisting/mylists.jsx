import React, { useContext, useState } from 'react'
import { userContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import Viewlistcard from './viewlistcard';
import { MdOutlineClear } from "react-icons/md";

const Mylists = () => {

    let { userData } = useContext(userContext);
    const navigate = useNavigate();
    

    if (!userData) {
        return <p>Loading user data...</p>;
    }




    return (
        <div >

            <div className=' md:h-[100vh] w-full relative flex flex-col justify-start md:flex-row  items-start flex-wrap md:gap-x-14 bg-[#F5F5DC] overflow-y-auto  ' >
                
                
                <div>
                    <MdOutlineClear className=' top-5 md:right-3 right-5 lg:right-8 lg:top-8 absolute md:h-[50px] md:w-[50px] h-[30px] w-[30px] bg-white rounded-full p-1 text-green-900' onClick={() => navigate("/")} />
                </div>
                <div>
                    <h1 className='  text-green-900 text-center my-10 md:text-4xl text-2xl font-bold   w-screen'>My Listings</h1>
                </div>


               <div className='flex flex-col lg:flex-row  md:grid mb-10 md:grid-cols-2 lg:grid-cols-3 gap-10  w-full justify-center items-center md:mx-20'>
                    {Array.isArray(userData.lists) ? (

                        userData.lists.map((list) => (
                            <div key={list._id}>
                                <Viewlistcard category={list.category} city={list.city} images={list.images} rent={list.rent} id={list._id} landmark={list.landmark} location={list.location} />
                            </div>
                        )))
                        : (
                            <p>No listings found or data is not loaded yet.</p>
                        )}

                </div>
                

            </div>
        </div>
    )
}

export default Mylists;