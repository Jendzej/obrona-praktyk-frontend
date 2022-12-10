import {useEffect, useState} from "react";
import {handleFetch} from "../../functions/handleFetch";

export const AllItems = ({className, onChange, id, toShow = false}) => {
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
    if (toShow) {
        return <>
            <table className="all-items-table">
                <thead>
                <td>ID</td>
                <td>Nazwa produktu</td>
                <td>Cena produktu</td>
                <td>Opis produktu</td>
                <td>URL zdjęcia produktu</td>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.item_name}</td>
                        <td>{item.item_price}</td>
                        <td>{item.item_description}</td>
                        <td>{item.item_image_url}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    } else {
        return <>
            <select className={className} onChange={onChange} id={id} required>
                {items.map(item => (
                    <option key={item.id} value={item.id}>{item.id} - {item.item_name}</option>
                ))}
            </select>
        </>
    }
}