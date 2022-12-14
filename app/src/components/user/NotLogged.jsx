import {Container} from "../Container";
import {Login} from "./Login";
import {Register} from "./Register";

export const NotLogged = () => {
    return <>
        <Container className="main">
            <Container id="login" className="login-log">
                <Login/>
            </Container>
            <Container id="register" className="register-log">
                <Register/>
            </Container>
        </Container>
    </>
}