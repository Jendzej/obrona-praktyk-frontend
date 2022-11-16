import {Container} from "../components/Container";
import {Header} from "../components/Header";
import {Register} from "../components/Register";
import {Login} from "../components/Login";

export const User = () => {
    let logged_in = false
    if (logged_in) {
        return <>
            <Container className="main">
                <Header size="1" id="user-header">
                    Logged User site
                </Header>
            </Container>
        </>
    } else {
        return <>
            <Container className="header">
                <Header size="1" id="user-header">
                    Not logged User site
                </Header>
            </Container>
            <Container className="main centered">
                <Container id="login" className="centered">
                    <Login />
                </Container>
                <Container id="register" className="centered">
                    <Register />
                </Container>
            </Container>
        </>
    }

}