import {useEffect, useState} from "react";
import {handleFetch} from "../../functions/handleFetch";
import {Container} from "../Container";

export const ItemsSelect = ({className, onChange, id}) => {
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
        <select className={className} onChange={onChange} id={id} required>
            {items.map(item => (
                <option key={item.id} value={item.id}>{item.id} - {item.item_name}</option>
            ))}
        </select>
    </>
}