import { createContext, useContext, useState, useEffect } from "react";

import { getCurrentUser } from '../lib/appwrite'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

export default function GlobalProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true)
                    setUser(res)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            }).catch((err) => {
                console.log('err: ', err)
            }).finally(() => {
                setIsLoading(false)
            })

    }, []);


    return (
        <GlobalContext.Provider
            value={{

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}