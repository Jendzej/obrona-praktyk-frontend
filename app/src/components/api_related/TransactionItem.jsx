import {useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {Container} from "../Container";
import {Header} from "../Header";

export const TransactionItem = ({item_id, item_price}) => {
    const [item, setItem] = useState({})
    useEffect(() => {
        async function fetchItemById() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/item/${item_id}`, localStorage.getItem('jwt-token'))
            setItem(data)
        }

        fetchItemById()
    }, [])

    if (item_price) {
        return <>
            <Container className="transaction-item">
                <Header size="4" className="item-name">{item.item_name}, <i>{item_price} zł</i></Header>
                <img className="transaction-image" src={item.item_image_url} alt={item.item_name}/>
            </Container>
        </>
    } else {
        return <>
            <Container className="shopping-item">
                <Header size="4">{item.item_name}</Header>
                <Header size="4">{item.item_price}zł</Header>
                <img className="shopping-image" src={item.item_image_url} alt={item.item_name}/>
            </Container>
        </>
    }

}