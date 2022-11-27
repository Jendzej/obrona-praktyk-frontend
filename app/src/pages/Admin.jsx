import {Container} from "../components/Container";
import {Header} from "../components/Header";
import {EditItems} from "../components/admin/EditItems";
import {AddItem} from "../components/admin/AddItem";
import {DelItem} from "../components/admin/DelItem";
import {DelUser} from "../components/admin/delUser";
import {useContext, useEffect} from "react";
import {UserContext} from "../components/UserProvider";
import {useNavigate} from "react-router-dom";

export const Admin = () => {
    const {role} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (role === "admin") {
            return <>
                <Container className="main">
                    <Header size="1" id="admin-header">
                        Admin Site
                    </Header>
                    <Container className="admin-forms">
                        <EditItems/>
                        <AddItem/>
                        <DelItem/>
                        <DelUser/>
                    </Container>
                </Container>
            </>
        } else {
            navigate("/")
        }
    }, [])
}