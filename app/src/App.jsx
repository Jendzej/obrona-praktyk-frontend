import {Container} from "./components/Container";
import {Button} from "./components/Button";
import {Form} from "./components/Form";
import {Input} from "./components/Input";
import {Header} from "./components/Header";

export default function App() {
    return <>
        <Container className="siema">Testowy</Container>
        <Button>Siema</Button>
        <Form id="form" name="formularz" action="_blank">test
            <Button type="submit">Aplołd</Button>
            <Input />
            <Header size='2' className="siema">
                TEST
            </Header>
        </Form>
    </>
}