import {Container} from "./Container";
import {Header} from "./Header";
import {Button} from "./Button";

export const SingleItem = ({id, item_name, item_price, item_description, item_image_url}) => {
    return <>
        <Container id={id} className="single-item center-grid">
            <Container className="content">
                <Header size={2}>
                    {item_name}
                </Header>
                <p className="item-price"><b>Cena:</b> {item_price}zł</p>
                <p className="item-description">{item_description}</p>
                <Container className="add-to-cart">
                    <Button onClick={console.log("clicked")}>Dodaj do koszyka</Button>
                </Container>
            </Container>
            <img className="image" src={item_image_url} alt="Cannot load image"/>
        </Container>
    </>
}