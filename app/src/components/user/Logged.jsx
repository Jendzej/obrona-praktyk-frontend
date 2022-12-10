import {Container} from "../Container";
import {UserData} from "./UserData";
import {Transactions} from "../api_related/Transactions";

export const Logged = () => {
    return <>
        <Container className="transactions">
            <Transactions/>
            <Container id="transaction-items"></Container>
        </Container>
        <Container className="main-konto">
            <UserData/>
        </Container>
    </>
}