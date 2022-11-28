import {createContext, useState} from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("user")
    const [logged, setLogged] = useState(false)
    const [userId, setUserId] = useState(false)

    const userInfo = {
        username: username,
        setUsername: setUsername,
        role: role,
        setRole: setRole,
        logged: logged,
        setLogged: setLogged,
        userId: userId,
        setUserId: setUserId
    }
    return <>
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    </>
}