import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Admin} from "./pages/Admin";
import {User} from "./pages/User";
import "./styles/stylesheet.css"
import {NavBar} from "./components/NavBar";
import {UserProvider} from "./components/user/UserProvider";
import {ShoppingCart} from "./components/ShoppingCart";
import {Order} from "./components/api_related/Order";

export default function App() {
    return <>
        <UserProvider>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/shopping_cart" element={<ShoppingCart/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </UserProvider>
    </>
}