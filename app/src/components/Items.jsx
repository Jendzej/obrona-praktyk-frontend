import {Container} from "./Container";
import {useEffect, useState} from "react";
import {handleFetch} from "../functions/handleFetch";

export const Items = () => {
    const [items, setItems] = useState([])
    const backend_host = process.env.REACT_APP_BACKEND_HOST
    const backend_port = process.env.REACT_APP_BACKEND_PORT
    useEffect(() => {
        async function fetchItems() {
            const data = await handleFetch(`http://${backend_host}:${backend_port}/item/all/`)
            setItems(data)
        }
        fetchItems()
    }, [])
    console.log(items)
    return <>
        <Container className="all-items center-grid">
            {items.map((item, index) => (
                <Container key={index} id={item.id} className="one-item">
                    {item.item_name}
                </Container>))
            }
        </Container>
    </>
}