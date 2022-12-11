import {Header} from "../components/Header";
import {TransactionItem} from "../components/api_related/TransactionItem";
import {Container} from "../components/Container";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

export const ShoppingCart = () => {
    if (localStorage.getItem('shopping-cart') === null) {
        localStorage.setItem('shopping-cart', JSON.stringify([]))
    }
    const itemsIds = JSON.parse(localStorage.getItem('shopping-cart'))
    const navigate = useNavigate()
    if (itemsIds.length > 0) {
        let itemsValue = 0
        return <>
            <Container className="main shopping-items">
                {itemsIds.map(item => {
                    itemsValue += item.price
                    return <>
                        <Container className="shopping-item">
                            <TransactionItem item_id={item.id}></TransactionItem>
                            <Button id="delete-cart" onClick={() => {
                                const itemToDelete = itemsIds.findIndex(object => {
                                    return object.id === item.id
                                })
                                itemsIds.pop(itemToDelete)
                                localStorage.setItem('shopping-cart', JSON.stringify(itemsIds))
                                window.location.reload(false)
                            }}>Usuń z koszyka</Button>
                        </Container>
                    </>
                })}
                <Header size="3">Wartość produktów w koszyku: {Math.round(itemsValue * 100) / 100}zł</Header>
            </Container>
            <Container className="button-cart">
                <Button className="button-carts" onClick={() => navigate('/order')}>Przejdź do płatności</Button>
                <Button className="button-carts" onClick={() => {
                    localStorage.removeItem('shopping-cart')
                    window.location.reload(false)
                }}>Usuń wszystko z koszyka</Button>
            </Container>
        </>
    } else {
        return <>
            <Header size="3" className="header-kosz">Twój koszyk jest pusty...</Header>
        </>
    }

}