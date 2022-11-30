import {Container} from "../components/Container";
import {EditItems} from "../components/admin/EditItems";
import {AddItem} from "../components/admin/AddItem";
import {DelItem} from "../components/admin/DelItem";
import {DelUser} from "../components/admin/DelUser";
import {useContext, useEffect} from "react";
import {UserContext} from "../components/user/UserProvider";
import {useNavigate} from "react-router-dom";
import {parseJWT} from "../utilities/parseJWT";

export const Admin = () => {
    const {role} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (role !== "admin") {
            navigate("/")
        }
    })
    if (role === "admin" && localStorage.getItem('logged') === 'true' && parseJWT(localStorage.getItem('jwt-token')).exp > Math.round(Date.now() / 1000)) {
        return (<>
            <Container className="main">
                <Container className="admin-forms">
                    <EditItems/>
                    <AddItem/>
                    <DelItem/>
                    <DelUser/>
                </Container>
            </Container>
        </>)
    }
}