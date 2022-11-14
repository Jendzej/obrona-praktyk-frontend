import {Container} from "./components/Container";
import {Button} from "./components/Button";
import {Form} from "./components/Form";

export default function App() {
    return <>
        <Container className="siema">Testowy</Container>
        <Button>Siema</Button>
        <Form id="form" name="formularz" action="_blank">test
            <Button form="formularz">Aplołd</Button>
        </Form>
    </>
}