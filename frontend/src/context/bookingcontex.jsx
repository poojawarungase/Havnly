import { children, createContext, useContext, useState } from "react";
import { authContext } from "./auth";
import axios from "axios";
import { userContext } from "./user";
import { listingContext } from "./listauth";
import { toast } from "react-toastify";

export const bookingContext = createContext();

function Bookingcontext({ children }) {

    let { serverUrl } = useContext(authContext);
    let [checkIn, setCheckIn] = useState("");
    let [checkOut, setCheckOut] = useState("");
    let [total, setTotal] = useState(0);
    let [bookingData, setbookingData] = useState(null);
    let [night, setNight] = useState(1);
    let { getUsers } = useContext(userContext);
    let { getListings } = useContext(listingContext);
    let [reason, setReason] = useState("");
    let [guestid, setGuestid] = useState(null);
   
    const handleBooking = async (id) => {

        try {

            const data = {
                checkIn,
                checkOut,
                totalRent: total
            }
            const response = await axios.post(serverUrl + `/booking/create/${id}`,
                data,
                { withCredentials: true },
            )
            await getUsers()
            await getListings()

            setbookingData(response.data);
            // console.log(response.data.guest);
            setGuestid(response.data.guest)
            toast.success("Booking added")

        } catch (error) {
            console.log(error);
            setbookingData(null);
        }
    }

    const cancelBooking = async (id) => {

        try {
            let response = await axios.put(serverUrl + `/booking/cancel/${id}`, { reason },
                { withCredentials: true })

            await getUsers();

            // console.log(response.data);
            toast.success("cancel booking")

        } catch (error) {
            console.log(error);
        }


    }

    

    let value = {
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        total, setTotal,
        night, setNight,
        bookingData, setbookingData,
        handleBooking,
        cancelBooking,
        reason, setReason,
        guestid
        

    }

    return (
        <bookingContext.Provider value={value}>
            {children}
        </bookingContext.Provider>
    )
}

export default Bookingcontext;