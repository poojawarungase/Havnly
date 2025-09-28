
import { React, createContext } from 'react';


export const authContext = createContext();

const Auth = ({ children }) => {

  let serverUrl = "http://localhost:8000";

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