import {useState} from "react";
import {handlePostData} from "../../functions/handlePostData";
import {Input} from "../Input";
import {Button} from "../Button";
import {Form} from "../Form";
import {Header} from "../Header";
import {useNavigate} from "react-router-dom";

export const AddItem = () => {
    const [itemName, setItemName] = useState(null)
    const [itemImageUrl, setItemImageUrl] = useState(null)
    const [itemPrice, setItemPrice] = useState(null)
    const [itemDescription, setItemDescription] = useState(null)
    const navigate = useNavigate()
    return <>
        <Form method="POST" className="add-item-form" onSubmit={async (e) => {
            e.preventDefault()
            const itemData = {
                item_name: itemName,
                item_price: itemPrice,
                item_description: itemDescription,
                item_image_url: itemImageUrl
            }
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            await handlePostData(`http://${backend_host}:${backend_port}/item`, itemData)
            navigate('/')
        }}>
            <Header size="3">Dodawanie produktu</Header>
            <Input label="Nazwa produktu: " onChange={(e) => {
                setItemName(e.target.value)
            }}/>
            <Input label="Cena produktu: " onChange={(e) => {
                setItemPrice(e.target.value)
            }}/>
            <Input label="Opis produktu: " onChange={(e) => {
                setItemDescription(e.target.value)
            }}/>
            <Input label="Adres URL zdjęcia produktu: " onChange={(e) => {
                setItemImageUrl(e.target.value)
            }}/>
            <Button className="admin-button">Dodaj produkt</Button>
        </Form>
    </>
}