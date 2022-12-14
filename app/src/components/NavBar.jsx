import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./user/UserProvider";
import {Header} from "./Header";
import {Container} from "./Container";
import {parseJWT} from "../utilities/parseJWT";

export const NavBar = () => {
    const {role} = useContext(UserContext)
    const rounded_date = Math.round(Date.now() / 1000)
    const logged = (localStorage.getItem('logged') === 'true') && (parseJWT(localStorage.getItem('jwt-token')).exp > rounded_date)
    const location = useLocation()
    let header
    location.pathname === "/" ? header = "BUŁA DO RĘKI"
        : location.pathname === "/user" ? header = "KONTO"
            : location.pathname === "/admin" ? header = "PANEL ADMINISTRACYJNY"
                : location.pathname === "/shopping_cart" ? header = "KOSZYK"
                    : location.pathname === "/order" ? header = "ZAMÓWIENIE"
                        : console.log("wrong site")

    return <>
        <Header className="header-name" size="1">{header}</Header>
        <ul className="header">
            <li><Link to='/'>Strona główna</Link></li>
            <li><Link to='/user'>Konto</Link></li>
            {logged ? <li><Link to='/shopping_cart'>Koszyk</Link></li>
                : <Container></Container>}
            {role === "admin" ? <li><Link to='/admin'>Panel administracyjny</Link></li>
                : <Container></Container>}
        </ul>
    </>


}