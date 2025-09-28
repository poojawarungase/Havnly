import { createContext, useContext, useState } from "react";
import { authContext } from "./auth";
import axios from "axios";

export const otpContex = createContext();

function OTPContex({ children }) {

    const { serverUrl } = useContext(authContext);
    const [otpData, setOtpdata] = useState("");
    const [email, setEmail] = useState("");

    const handleOTP = async (otp) => {

        try {

            const response = await axios.post(serverUrl + "/user/verify-otp",
                { email, otp }, { withCredentials: true },
            )
            setOtpdata(response.data);
            // console.log("OTP verified:", response.data);

        } catch (error) {
            console.log(error);
        }
    }

    let value = {
        handleOTP,
        email, setEmail,
        otpData, setOtpdata
    }

    return (

        <otpContex.Provider value={value}>
            {children}
        </otpContex.Provider>
    )

}

export default OTPContex;