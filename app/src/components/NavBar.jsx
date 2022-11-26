import {Link} from "react-router-dom";
import {Button} from "./Button";
import {useContext} from "react";
import {UserContext} from "./UserProvider";

export const NavBar = () => {
    const {role} = useContext(UserContext)
    if (role === "admin") {
        return <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
            </ul>
        </>
    } else {
        return <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user'>User</Link></li>
            </ul>
        </>
    }

}