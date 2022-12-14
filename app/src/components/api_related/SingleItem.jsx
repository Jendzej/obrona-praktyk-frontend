import {Container} from "../Container";
import {Header} from "../Header";
import {Button} from "../Button";
import {parseJWT} from "../../utilities/parseJWT";

export const SingleItem = ({id, item_name, item_price, item_description, item_image_url}) => {
    const rounded_date = Math.round(Date.now() / 1000)
    const logged = (localStorage.getItem('logged') === 'true') && (parseJWT(localStorage.getItem('jwt-token')).exp > rounded_date)

    return <>
        <Container id={id} className="single-item">
            <Header size={2}>
                {item_name}
            </Header>
            <p className="item-description">{item_description}</p>
            <img className="image" src={item_image_url} alt={item_name}/>
            <p className="item-price"><b>Cena:</b> {item_price}zł</p>
            {logged ? <Container className="add-to-cart">
                    <Button onClick={() => {
                        if (localStorage.getItem('shopping-cart') === null) {
                            localStorage.setItem('shopping-cart', JSON.stringify([]))
                        }
                        const data = JSON.parse(localStorage.getItem('shopping-cart'))
                        data.push({id: id, price: item_price})
                        localStorage.setItem('shopping-cart', JSON.stringify(data))
                        alert(`Produkt '${item_name}' został dodany do koszyka!`)
                    }}>
                        Dodaj do koszyka
                    </Button></Container>
                : <Container></Container>
            }

        </Container>
    </>
}