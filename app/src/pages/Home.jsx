import {Container} from "../components/Container";
import {Items} from "../components/api_related/Items";
import {useLocation} from "react-router-dom";

export const Home = () => {
    const location = useLocation()
    console.log(location.pathname)
    return <>
        <Container className="main centered">
            <Container className="center-grid">
                <Items/>
            </Container>
        </Container>
    </>
}