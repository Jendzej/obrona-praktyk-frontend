import {createContext, useState} from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [token, setToken] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("user")
    const [response, setResponse] = useState("")
    const [logged, setLogged] = useState(false)

    const userInfo = {
        username: username,
        setUsername: setUsername,
        token: token,
        setToken: setToken,
        role: role,
        setRole: setRole,
        response: response,
        setResponse: setResponse,
        logged: logged,
        setLogged: setLogged
    }
    return <>
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    </>
}