import {Container} from "../components/Container";
import {Header} from "../components/Header";
import {EditItems} from "../components/admin/EditItems";

export const Admin = () => {
    return <>
        <Container className="main">
            <Header size="1" id="admin-header">
                Admin Site
            </Header>
            <EditItems/>
        </Container>
    </>
}