import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Admin} from "./pages/Admin";
import {User} from "./pages/User";
import "./styles/stylesheet.css"
import {NavBar} from "./components/NavBar";

export default function App() {
    return <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
    </>
}