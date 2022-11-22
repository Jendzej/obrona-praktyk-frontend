import {Container} from "../components/Container";
import {Header} from "../components/Header";
import {Items} from "../components/Items";

export const Home = () => {
    return <>
        <Container className="main centered">
            <Container className="header center-grid">
                <Header size="1" id="home-header" className="">Home site</Header>
            </Container>
            <Items/>
        </Container>
    </>
}