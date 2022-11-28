import {Container} from "../Container";
import {Header} from "../Header";
import {UserData} from "./UserData";
import {Transactions} from "../api_related/Transactions";

export const Logged = () => {
    return <>
        <Container className="header">
            <Header size="1" id="user-header">
                Your account
            </Header>
        </Container>
        <Container className="main centered center-grid">
            <UserData/>
        </Container>
        <Container className="transactions">
            <Transactions/>
            <Container id="transaction-items"></Container>
        </Container>
    </>
}