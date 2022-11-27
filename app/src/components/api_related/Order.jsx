import {Input} from "../Input";
import {Form} from "../Form";
import {SelectDeliveryTime} from "../SelectDeliveryTime";
import {SelectPaymentMethod} from "../SelectPaymentMethod";
import {Button} from "../Button";
import {useNavigate} from "react-router-dom";
import {handlePostData} from "../../functions/handlePostData";
import {useState} from "react";

export const Order = () => {
    const itemsIds = JSON.parse(localStorage.getItem('shopping-cart')).map(item => item.id)
    const navigate = useNavigate()
    const [delTime, setDelTime] = useState("")
    const [delDate, setDelDate] = useState("")
    console.log(itemsIds)
    return <>
        <Form method="POST" onSubmit={async (e) => {
            e.preventDefault()
            const transactionData = {
                items: itemsIds,
                payment_status: "paid",
                del_time: delDate + " " + delTime
            }
            console.log(transactionData)
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const response = await handlePostData(`http://${backend_host}:${backend_port}/transaction`, transactionData)
            localStorage.removeItem('shopping-cart')
            navigate('/user')

        }}>
            <Input type="date" onChange={(e) => {
                setDelDate(e.target.value)
            }}/>
            <SelectDeliveryTime onChange={(e) => {
                setDelTime((e.target.value).split("- ").pop())
            }}/>
            <SelectPaymentMethod/>
            <Button>Kup</Button>
        </Form>
    </>
}