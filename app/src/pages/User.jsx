import {Logged} from "../components/user/Logged";
import {NotLogged} from "../components/user/NotLogged";
import {parseJWT} from "../utilities/parseJWT";
import {useLocation} from "react-router-dom";

export const User = () => {
    const location = useLocation()
    console.log(location.pathname)
    if (localStorage.getItem('logged') === 'true' && parseJWT(localStorage.getItem('jwt-token')).exp > Math.round(Date.now() / 1000)) {
        return <>
            <Logged/>
        </>
    } else {
        localStorage.setItem('jwt-token', null)
        localStorage.setItem('logged', false)
        return <>
            <NotLogged/>
        </>
    }

}