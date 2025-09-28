import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { authContext } from "./auth";
import { toast } from "react-toastify";


export const addressContext = createContext();

function AddressCont({ children }) {

    let { serverUrl } = useContext(authContext);

    let [country, setCountry] = useState("");
    let [state, setState] = useState("");
    let [district, setDistrict] = useState("");
    let [city, setCity] = useState("");
    let [landmark, setLandmark] = useState("");
    let [street, setStreet] = useState("");
    let [pcode, setPcode] = useState("");


    let handleAddress = async () => {

        try {

            const addressData = {
                country,
                state,
                district,
                city,
                landmark,
                street,
                pincode: pcode,
            };

            let response = await axios.post(serverUrl + "/address/add", addressData,
                { withCredentials: true }
            )
            console.log(response);
            toast.success("Address added...")

        } catch (error) {
            console.log(error);
        }
    }

    let value = {
        country, setCountry,
        state, setState,
        district, setDistrict,
        city, setCity,
        landmark, setLandmark,
        street, setStreet,
        pcode, setPcode,
        handleAddress

    }

    return (
        <div>
            <addressContext.Provider value={value}>
                {children}
            </addressContext.Provider>
        </div>
    )
}

export default AddressCont;