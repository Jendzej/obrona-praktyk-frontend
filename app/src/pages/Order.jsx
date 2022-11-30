import {Input} from "../components/Input";
import {Form} from "../components/Form";
import {SelectDeliveryTime} from "../components/SelectDeliveryTime";
import {SelectPaymentMethod} from "../components/SelectPaymentMethod";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";
import {handlePostData} from "../functions/handlePostData";
import {useState} from "react";
import {Container} from "../components/Container";

export const Order = () => {
    const itemsIds = JSON.parse(localStorage.getItem('shopping-cart')).map(item => item.id)
    const navigate = useNavigate()
    const [delTime, setDelTime] = useState("")
    const [delDate, setDelDate] = useState("")
    return <>
        <Container>
            <Form method="POST" onSubmit={async (e) => {
                e.preventDefault()
                const transactionData = {
                    items: itemsIds,
                    payment_status: "paid",
                    del_time: delDate + " " + delTime
                }
                const backend_host = process.env.REACT_APP_BACKEND_HOST
                const backend_port = process.env.REACT_APP_BACKEND_PORT
                await handlePostData(`http://${backend_host}:${backend_port}/transaction`, transactionData)
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
        </Container>
    </>
}