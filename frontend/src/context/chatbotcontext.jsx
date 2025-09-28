import { createContext, useContext, useState } from "react";
import { authContext } from "./auth";
import axios from "axios";
import { formatText } from "../components/format";

export const chatassistantContext = createContext();

function Chatbotcontext({ children }) {


    const { serverUrl } = useContext(authContext);

    const [chatdata, setChatdata] = useState('');


    const handleChat = async (message) => {

        try {

            const response = await axios.post(serverUrl + "/chatbot/chat", { message },
                { withCredentials: true },
            )

            let rawtext = response.data.reply;
            let cleardata = formatText(rawtext);

            setChatdata(cleardata);

            // console.log(cleardata);

        } catch (error) {
            console.log(error);
        }

    }

    let value = {
        chatdata,
        setChatdata,
        handleChat

    }

    return (

        <chatassistantContext.Provider value={value}>
            {children}
        </chatassistantContext.Provider>
    )
}

export default Chatbotcontext;