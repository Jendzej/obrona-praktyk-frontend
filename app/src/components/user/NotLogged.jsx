import {Container} from "../Container";
import {Login} from "./Login";
import {Register} from "./Register";

export const NotLogged = () => {
    return <>
        <Container className="main centered">
            <Container id="login" className="centered right_grid">
                <Login/>
            </Container>
            <Container id="register" className="centered left-grid">
                <Register/>
            </Container>
        </Container>
    </>
}