import {Header} from "../components/Header";
import {TransactionItem} from "../components/api_related/TransactionItem";
import {Container} from "../components/Container";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

export const ShoppingCart = () => {
    const itemsIds = JSON.parse(localStorage.getItem('shopping-cart'))
    const navigate = useNavigate()
    if (itemsIds) {
        let itemsValue = 0
        return <>
            <Header size="1" className="header-kosz">Koszyk</Header>
            <Container className="main shopping-items">
                {itemsIds.map(item => {
                    itemsValue += item.price
                    return <>
                        <TransactionItem item_id={item.id}></TransactionItem>
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
            <Header size="1" className="header-kosz">Koszyk</Header>
            <Header size="3" className="header-kosz">Twój koszyk jest pusty...</Header>
        </>
    }

}