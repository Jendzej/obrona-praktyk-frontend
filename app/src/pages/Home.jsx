import {Container} from "../components/Container";
import {Items} from "../components/api_related/Items";

export const Home = () => {
    return <>
        <Container className="main centered">
            <Container className="center-grid">
                <Items/>
            </Container>
        </Container>
    </>
}