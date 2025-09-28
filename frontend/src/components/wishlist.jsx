import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClear } from 'react-icons/md';
import { wishlistContex } from '../context/wishlistcontex';
import Wishcard from './wishlistcard';


const Wishlist = () => {

    let navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
   
    let { removelist } = useContext(wishlistContex);
    const { userData } = useContext(userContext);



    useEffect(() => {
        if (userData?.wishList) {
            const active = userData.wishList.filter(b => b.status !== 'remove');
            setWishlist(active);
        }
    }, [userData]);

    if (!userData) {
        return <p>Loading user data...</p>;
    }

    const remove = async (id) => {
        try {
            await removelist(id);
            setWishlist((prev) => prev.filter((b) => b._id !== id));
        } catch (error) {
            console.error('Cancel failed:', error);
        }
    };


    return (
        <div className="h-[100vh] relative flex flex-col justify-center md:p-10 p-5 items-center bg-[#F5F5DC] ">
            {/* Close button */}
            <div>
                <MdOutlineClear
                    className="md:right-5 md:top-5 top-3 right-3  absolute md:h-[50px] md:w-[50px] h-[30px] w-[30px] bg-green-900 rounded-full p-1 text-white cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>

            <h1 className="md:text-4xl text-2xl font-bold  mb-5 text-green-900">Wishlist</h1>

            
            {wishlist.length > 0 ? (
            <div className="w-full md:max-w-7xl h-[100vh] overflow-y-auto space-y-8 ">
                {wishlist
                    .filter(wish => wish.listing)
                    .map((wish) => (
                        <Wishcard
                            key={wish._id}
                            id={wish._id}
                            category={wish.listing?.category}
                            city={wish.listing?.city}
                            title={wish.listing?.title}
                            images={wish.listing?.images}
                            rent={wish.listing?.rent}
                            landmark={wish.listing?.landmark}
                            location={wish.listing?.location}
                            amenhost={wish.listing?.amenhost}
                            description={wish.listing?.description}
                            remove={remove}
                        />
                    ))}
            </div>
        ) : (
            <p className='font-bold text-green-800 text-2xl'>Wish list is not present</p>
        )}
        </div>
    );
};

export default Wishlist;
