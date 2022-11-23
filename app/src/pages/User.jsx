import {Container} from "../components/Container";
import {Header} from "../components/Header";
import {Register} from "../components/Register";
import {Login} from "../components/Login";
import {UserData} from "../components/UserData";

export const User = () => {
    let logged_in
    if (localStorage.getItem('jwt-token') !== null){
        logged_in = true
    } else {
        logged_in = false
    }
    if (logged_in) {
        return <>
            <Container className="header">
                <Header size="1" id="user-header">
                    Your account
                </Header>
            </Container>
            <Container className="main centered center-grid">
                <UserData/>
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
                <Container id="login" className="centered right_grid">
                    <Login />
                </Container>
                <Container id="register" className="centered left-grid">
                    <Register />
                </Container>
            </Container>
        </>
    }

}