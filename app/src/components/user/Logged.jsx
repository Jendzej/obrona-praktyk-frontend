import {Container} from "../Container";
import {UserData} from "./UserData";
import {Transactions} from "../api_related/Transactions";

export const Logged = () => {
    return <>
        <Container className="main centered center-grid">
            <UserData/>
        </Container>
        <Container className="transactions">
            <Transactions/>
            <Container id="transaction-items"></Container>
        </Container>
    </>
}