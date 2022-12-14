import {useContext} from "react";
import {UserContext} from "../components/user/UserProvider";

export const ResetPageData = () => {
    const {setUsername, setRole, setLogged, setUserId} = useContext(UserContext)

    localStorage.removeItem('jwt-token')
    localStorage.removeItem('logged')
    localStorage.removeItem('username')
    localStorage.removeItem('shopping-cart')
    setUsername(null)
    setRole(null)
    setLogged(null)
    setUserId(null)

}