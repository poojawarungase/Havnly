import React, { useContext, useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { chatassistantContext } from '../context/chatbotcontext';

const Assistant = () => {

    const { handleChat, chatdata } = useContext(chatassistantContext);
    const [prompt, setPrompt] = useState("");
    const [showbox, setShowbox] = useState(false);

    const handlePrompt = async () => {
        if (prompt.trim() === "") return;
        await handleChat(prompt);
        setPrompt("");

    }

    return (
        <div>
            <div >
            
                <div className='fixed md:bottom-5 md:right-10 bottom-2 right-2   z-[1000] '>
                    <div  className='flex flex-col items-center '>
                        <div onClick={() => setShowbox(true)} className='w-[100px] h-[100px] p-[5px] rounded-full hover:shadow-[0_0_25px_5px_rgba(16,185,129,0.8)]  shadow-lg transition-transform hover:scale-105 '>
                            <img src='./assistant.jpg' className='w-full h-full object-cover rounded-full bg-white' />
                        </div>
                        <p className='font-bold py-2  text-black  '>Ask about your places..</p>
                    </div>

                    {showbox && (
                        <div className='absolute  bottom-10 right-0 w-[250px] h-[250px] md:w-[320px] md:h-[380px] lg:w-[350px] lg:h-[450px] bg-blue-100 shadow-lg shadow-black rounded-lg p-3'>
                            <MdClear className='absolute top-2 right-3 w-6 h-6 cursor-pointer' onClick={() => setShowbox(false)} />
                            <div className='flex flex-col h-[92%]'>
                                <p className='font-semibold text-xl'>About your place..</p>
                                {chatdata && (
                                    <div
                                        className="rounded text-sm shadow overflow-y-auto scrollbar-hide md:font-bold h-[98%] md:p-2"
                                        dangerouslySetInnerHTML={{ __html: chatdata }}
                                    />
                                )}
                            </div>
                            <div className='flex absolute bottom-2 w-full'>
                                <input
                                    type='text'
                                    className='border border-gray-400 bg-green-300 outline-none md:h-9 h-8 rounded-full w-[90%] text-center'
                                    placeholder="Ask something..."
                                    onChange={(e) => setPrompt(e.target.value)}
                                    value={prompt}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                          e.preventDefault(); 
                                          handlePrompt();
                                        }
                                      }}
                                />
                                <IoMdSend className='absolute top-1 right-10 w-6 h-6 md:w-7 md:h-7 cursor-pointer' onClick={handlePrompt} />
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Assistant