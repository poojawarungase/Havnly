import React, { useContext } from 'react'

import Catnav from '../addlisting/catnav';
import Card from './card';
import { listingContext } from '../context/listauth';
import Assistant from './assistant';
import Footer from './footer';
import Nav from './nav';




const Home = () => {

    let { newlistingdata } = useContext(listingContext);


    return (
        <>
            <div className=' '>
                <div className='flex flex-col  md:h-[22vh] h-[30vh] w-[100vw] '>
                    <Nav />
                    <Catnav />
                </div>
                <div className=' md:h-[100vh] h-[100vh] flex  justify-center flex-wrap  items-start  gap-x-14 md:pt-10  pt-5 overflow-y-auto scrollbar-hide  px-10'>

                    {Array.isArray(newlistingdata) ? (
                        newlistingdata.map((list) => {
                            

                            const reviews = list.reviewBy.filter(r => typeof r.rating === "number");

                            const totalReviews = reviews.length;
                            const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
                            const averageRating = totalReviews ? totalRating / totalReviews : 0;



                            return (
                                <div key={list._id}>
                                    <Card
                                        category={list.category}
                                        city={list.city}
                                        images={list.images}
                                        rent={list.rent}
                                        id={list._id}
                                        landmark={list.landmark}
                                        location={list.location}
                                        isBooked={list.isBooked}
                                        host={list.host}
                                        rating={averageRating}
                                        bookedBy={list.bookedBy}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <p>No listings found or data is not loaded yet.</p>
                    )}



                </div>
                <Assistant />
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home;