import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { authContext } from "./auth";
import { toast } from "react-toastify";

export const amenitiesContext = createContext();

function AmenitiesCont({ children }) {
    let { serverUrl } = useContext(authContext);

    let [guests, setGuests] = useState(1);
    let [bedrooms, setBedrooms] = useState(0);
    let [beds, setBeds] = useState(1);
    let [bathrooms, setBathrooms] = useState(1);
    let [anyamenities, setAnyamenities] = useState();
    let [placehasoffer, setPlaceHasOffer] = useState();
    let [getaminity, setGetAminity] = useState(null);
    
    let handleAmenities = async () => {

        try {

            let backendData = {
                guests,
                bedrooms,
                beds,
                bathrooms,
                anyamenities,
                placeHasOffer: placehasoffer,
            }

            const response = await axios.post(serverUrl + "/amenities/add",
                backendData,
                { withCredentials: true }
            );
            // console.log(response);
            toast.success("All amenities adding...")

        } catch (error) {
            console.log(error);
        }
    }

    let getAmenitieswithid = async (id) => {

        try {

            let response = await axios.get(serverUrl + `/amenities/get/${id}`,
                { withCredentials: true })
            setGetAminity(response.data);
            // console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    

    let value = {
        guests, setGuests,
        bedrooms, setBedrooms,
        beds, setBeds,
        bathrooms, setBathrooms,
        anyamenities, setAnyamenities,
        placehasoffer, setPlaceHasOffer,
        handleAmenities,
        getaminity, setGetAminity,
        getAmenitieswithid,
        
    }

    return (
        <amenitiesContext.Provider value={value}>
            {children}
        </amenitiesContext.Provider>
    )
}

export default AmenitiesCont;