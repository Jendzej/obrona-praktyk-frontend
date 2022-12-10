import {Container} from "../components/Container";
import {EditItems} from "../components/admin/EditItems";
import {AddItem} from "../components/admin/AddItem";
import {DelItem} from "../components/admin/DelItem";
import {DelUser} from "../components/admin/DelUser";
import {useContext, useEffect} from "react";
import {UserContext} from "../components/user/UserProvider";
import {useNavigate} from "react-router-dom";
import {parseJWT} from "../utilities/parseJWT";
import {AllTransactions} from "../components/admin/AllTransactions";
import {EditUser} from "../components/admin/EditUser";
import {AllUsers} from "../components/api_related/AllUsers";
import {AllItems} from "../components/api_related/AllItems";

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
                    <AllItems toShow={true}/>
                    <EditItems/>
                    <AddItem/>
                    <DelItem/>
                    <AllUsers toShow={true}/>
                    <EditUser/>
                    <DelUser/>
                    <AllTransactions/>
                </Container>
            </Container>
        </>)
    }
}