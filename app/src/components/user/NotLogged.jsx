import {Container} from "../Container";
import {Login} from "./Login";
import {Register} from "./Register";

export const NotLogged = () => {
    return <>
        <Container className="main">
            <Container id="login" className="centered">
                <Login/>
            </Container>
            <Container id="register" className="centered">
                <Register/>
            </Container>
        </Container>
    </>
}