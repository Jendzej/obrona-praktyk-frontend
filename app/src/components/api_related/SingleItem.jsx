import {Container} from "../Container";
import {Header} from "../Header";
import {Button} from "../Button";
import {useState} from "react";

export const SingleItem = ({id, item_name, item_price, item_description, item_image_url}) => {
    const logged = localStorage.getItem('logged')
    return <>
        <Container id={id} className="single-item center-grid">
            <Container className="content">
                <Header size={2}>
                    {item_name}
                </Header>
                <p className="item-price"><b>Cena:</b> {item_price}zł</p>
                <p className="item-description">{item_description}</p>
                {logged === 'true' ? <Container className="add-to-cart">
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
                    : <Container></Container>}

            </Container>
            <img className="image" src={item_image_url} alt="Cannot load image"/>
        </Container>
    </>
}