import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./user/UserProvider";
import {Header} from "./Header";

export const NavBar = () => {
    const {role} = useContext(UserContext)
    const logged = localStorage.getItem('logged')
    const location = useLocation()
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
                <ul className="header">
                    <li><Header size="1">{header}</Header></li>
                    <li><Link to='/'>Strona główna</Link></li>
                    <li><Link to='/user'>Konto</Link></li>
                    <li><Link to='/admin'>Panel administracyjny</Link></li>
                    <li><Link to='/shopping_cart'>Koszyk</Link></li>
                </ul>
            </>
        } else {
            return <>
                <ul className="header">
                    <li><Header size="1">{header}</Header></li>
                    <li><Link to='/'>Strona główna</Link></li>
                    <li><Link to='/user'>Konto</Link></li>
                    <li><Link to='/shopping_cart'>Koszyk</Link></li>
                </ul>
            </>
        }
    } else {
        return <>
            <ul className="header">
                <li><Header size="1">{header}</Header></li>
                <li><Link to='/'>Strona główna</Link></li>
                <li><Link to='/user'>Konto</Link></li>
            </ul>
        </>
    }


}