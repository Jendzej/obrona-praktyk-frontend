import {Container} from "../Container";
import {useEffect, useState} from "react";
import {handleFetch} from "../../functions/handleFetch";
import {SingleItem} from "./SingleItem";

export const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        async function fetchItems() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetch(`http://${backend_host}:${backend_port}/item/all/`)
            setItems(data)
        }

        fetchItems()
    }, [])
    return <>
        <Container className="all-items">
            {items.map((item, index) => (
                <SingleItem key={index} id={item.id} item_name={item.item_name} item_price={item.item_price}
                            item_description={item.item_description} item_image_url={item.item_image_url}/>
            ))}
        </Container>
    </>
}