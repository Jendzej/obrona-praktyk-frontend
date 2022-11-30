import {Link, useLocation, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./user/UserProvider";
import {Header} from "./Header";

export const NavBar = () => {
    const {role} = useContext(UserContext)
    const logged = localStorage.getItem('logged')
    const location = useLocation()
    const navigate = useNavigate()
    let header
    location.pathname === "/" ? header = "BUŁA DO RĘKI"
        : location.pathname === "/user" ? header = "KONTO"
            : location.pathname === "/admin" ? header = "PANEL ADMINISTRACYJNY"
                : location.pathname === "/shopping_cart" ? header = "KOSZYK"
                    : location.pathname === "/order" ? header = "ZAMÓWIENIE"
                        : console.log("wrong site")
    if (logged === "true") {
        if (role === "admin") {
            return <>
                <ul>
                    <li><Header size="1">{header}</Header></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/user'>User</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/shopping_cart'>Shopping cart</Link></li>
                </ul>
            </>
        } else {
            return <>
                <ul>
                    <li><Header size="1">{header}</Header></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/user'>User</Link></li>
                    <li><Link to='/shopping_cart'>Shopping cart</Link></li>
                </ul>
            </>
        }
    } else {
        return <>
            <ul>
                <li><Header size="1">{header}</Header></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user'>User</Link></li>
            </ul>
        </>
    }


}