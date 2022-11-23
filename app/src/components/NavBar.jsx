import {Link} from "react-router-dom";
import {Button} from "./Button";

export const NavBar = () => {
    return <>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
        </ul>
    </>
}