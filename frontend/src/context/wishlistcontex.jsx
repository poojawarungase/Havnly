import axios from "axios";
import { createContext, useContext, useState } from "react";
import { authContext } from "./auth";
import { toast } from "react-toastify";


export const wishlistContex = createContext();

function Wishlistcont({ children }) {

    let { serverUrl } = useContext(authContext);
    let [wishData, setWishData] = useState([]);

    const handleWishlist = async (id) => {

        try {
            const response = await axios.post(serverUrl + `/wishlist/add/${id}`,
                {},
                {
                    withCredentials: true

                }
            );
            setWishData(response.data.wishList);
            // console.log(response.data.wishList);
            toast.success("Add in wishlist..")

        } catch (error) {
            console.log(error);
        }
    }

    const removelist = async (id) => {
        try {
            const response = await axios.put(serverUrl + `/wishlist/remove/${id}`,
                {
                    withCredentials: true

                }
            );
            // console.log(response);
            toast.success("Remove list from wishlist..");
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }


    let value = {
        wishData, setWishData,
        handleWishlist,
        removelist
    }

    return (
        <wishlistContex.Provider value={value}>
            {children}
        </wishlistContex.Provider>
    )

}

export default Wishlistcont;