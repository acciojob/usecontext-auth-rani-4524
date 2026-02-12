import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isRobot ,setIsRobot] = useState(false);

    const checked = ()=>{
        setIsRobot(true)
    }

    const unchecked =()=>{
        setIsRobot(false);
    }

    return (
        <AuthContext.Provider value={{isRobot , checked , unchecked}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}
