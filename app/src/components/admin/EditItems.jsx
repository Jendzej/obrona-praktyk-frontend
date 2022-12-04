import {Form} from "../Form";
import {Input} from "../Input";
import {useState} from "react";
import {Button} from "../Button";
import {handleEditData} from "../../functions/handleEditData";
import {Header} from "../Header";
import {ItemsSelect} from "../api_related/ItemsSelect";
import {useNavigate} from "react-router-dom";

export const EditItems = () => {
    const [itemId, setItemId] = useState(null)
    const [itemName, setItemName] = useState(null)
    const [itemImageUrl, setItemImageUrl] = useState(null)
    const [itemPrice, setItemPrice] = useState(null)
    const [itemDescription, setItemDescription] = useState(null)
    const navigate = useNavigate()
    return <>
        <Form method="POST" className="edit-item-form" onSubmit={async (e) => {
            e.preventDefault()
            const updatedItem = {
                item_name: itemName,
                item_price: itemPrice,
                item_description: itemDescription,
                item_image_url: itemImageUrl
            }
            const notNullUpdated = Object.fromEntries(Object.entries(updatedItem).filter(([_, v]) => v !== null && v != ""))
            e.target.reset()
            await handleEditData(itemId, {updated_item: notNullUpdated}, 'item')
            navigate('/')
        }}>
            <Header size="3">Edycja produktu</Header>

            <ItemsSelect onChange={(e) => {
                setItemId(e.target.value)
            }}/>
            <Input label="Nowa nazwa produktu:" onChange={(e) => {
                setItemName(e.target.value)
            }}/>
            <Input label="Nowa cena produktu:" onChange={(e) => {
                setItemPrice(e.target.value)
            }}/>
            <Input label="Nowy opis produktu:" onChange={(e) => {
                setItemDescription(e.target.value)
            }}/>
            <Input label="Nowy adres URL zdjęcia produktu:" onChange={(e) => {
                setItemImageUrl(e.target.value)
            }}/>
            <Button className="admin-button">Edytuj produkt</Button>

        </Form>
    </>
}