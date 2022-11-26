import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Admin} from "./pages/Admin";
import {User} from "./pages/User";
import "./styles/stylesheet.css"
import {NavBar} from "./components/NavBar";
import {UserProvider} from "./components/UserProvider";
import {Transactions} from "./components/api_related/Transactions";

export default function App() {
    return <>
        <UserProvider>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </UserProvider>
    </>
}