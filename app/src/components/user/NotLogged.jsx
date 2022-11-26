import {Container} from "../Container";
import {Header} from "../Header";
import {Login} from "../api_related/Login";
import {Register} from "../api_related/Register";

export const NotLogged = () => {
    return <>
        <Container className="header">
            <Header size="1" id="user-header">
                Not logged User site
            </Header>
        </Container>
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