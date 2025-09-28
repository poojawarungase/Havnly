import { createContext, useContext, useState } from "react";
import { authContext } from "./auth";
import axios from "axios";
import { toast } from "react-toastify";

export const paymentContext = createContext();

function Paymentcon({ children }) {

    let { serverUrl } = useContext(authContext);
    const [payment, setPayment] = useState(null);
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [paymentMethod, setPaymentmethod] = useState("");
    const [transactionId, settransId] = useState("");


    let handlePayment = async (id) => {



        try {

            const paylaod = {
                amount,
                currency,
                paymentMethod,
                transactionId
            }

            const response = await axios.post(`${serverUrl}/payment/add/${id}`, paylaod,
                { withCredentials: true },
            )
            setPayment(response.data);
            settransId(response.data.transactionId);
            // console.log(response.data);
            toast.success("payment complete successfully")

        } catch (error) {
            console.log(error);
            toast.error("Payment not complete");
        }
    }

    let value = {
        amount,
        setAmount,
        currency, setCurrency,
        payment, setPayment,
        paymentMethod, setPaymentmethod,
        transactionId, settransId,
        handlePayment

    }

    return (
        <paymentContext.Provider value={value}>
            {children}
        </paymentContext.Provider>
    )
}

export default Paymentcon;