import {Header} from "./Header";
import {TransactionItem} from "./api_related/TransactionItem";
import {Container} from "./Container";
import {Button} from "./Button";
import {useNavigate} from "react-router-dom";

export const ShoppingCart = () => {
    const itemsIds = JSON.parse(localStorage.getItem('shopping-cart'))
    const navigate = useNavigate()
    if (itemsIds) {
        let itemsValue = 0
        return <>
            <Header size="1">Shopping cart</Header>
            <Container className="shopping-items">
                {itemsIds.map(item => {
                    itemsValue += item.price
                    return <>
                        <TransactionItem item_id={item.id}></TransactionItem>
                    </>
                })}
                <Header size="3">Shopping cart value: {Math.round(itemsValue * 100) / 100}zł</Header>
            </Container>
            <Button onClick={() => navigate('/order')}>Buy items</Button>
            <Button onClick={() => {
                localStorage.removeItem('shopping-cart')
                window.location.reload(false)
            }}>Clear shopping cart</Button>
        </>
    } else {
        return <>
            <Header size="1">Shopping cart</Header>
            <Header size="3">Your shopping cart is empty</Header>
        </>
    }

}