import { React, createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import { authContext } from "./auth";

export const userContext = createContext();

function Userauth({ children }) {

    const { serverUrl } = useContext(authContext);
    const [userData, setuserData] = useState(null);
    const [loading, setLoading] = useState(true);


    const getUsers = async () => {

        try {
            let result = await axios.get(serverUrl + "/user/getuser",
                { withCredentials: true }

            )
            if (result.data && result.data.message) {

                setuserData(null);
            } else {
                setuserData(result.data);
            }
        } catch (error) {
            setuserData(null);

        } finally {
            setLoading(false);
        }

    }


    const logout = async () => {

        try {
            let result = await axios.post(serverUrl + "/user/logout", {},
                { withCredentials: true }

            )
            setuserData(null);

        } catch (error) {  

            console.log(error);
        }

    }


    useEffect(() => {
        getUsers();
    }, []);



    let value = {
        userData,
        setuserData,
        getUsers,
        logout,
        loading

    }

    return (
        <div>
            <userContext.Provider value={value}>
                {children}
            </userContext.Provider>
        </div>
    )
}

export default Userauth;
