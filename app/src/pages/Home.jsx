import {Container} from "../components/Container";
import {Header} from "../components/Header";
import {Items} from "../components/api_related/Items";

export const Home = () => {
    return <>
        <Container className="main centered">
            <Container className="header center-grid">
                <Header size="1" id="home-header" className="">BUŁA DO RĘKI</Header>
            </Container>
            <Container className="center-grid">
                <Items/>
            </Container>
        </Container>
    </>
}