
import { React, createContext } from 'react';


export const authContext = createContext();

const Auth = ({ children }) => {

  let serverUrl = "https://havnlybackend.vercel.app/";

  let value = {
    serverUrl
  }

  return (
    <div>
      <authContext.Provider value={value}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default Auth;
