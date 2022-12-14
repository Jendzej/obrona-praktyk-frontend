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
    const [paymentMethod, setPaymentMethod] = useState("not paid")
    return <>
        <Container className="order-form">
            <Form method="POST" onSubmit={async (e) => {
                e.preventDefault()
                let paymentStatus
                paymentMethod === "cash" ? paymentStatus = "not_paid"
                    : paymentMethod === "blik" ? paymentStatus = "paid"
                        : paymentMethod === "transfer" ? paymentStatus = "pending"
                            : paymentStatus = "not_paid"
                const transactionData = {
                    items: itemsIds,
                    payment_status: paymentStatus,
                    del_time: delDate + " " + delTime
                }
                const backend_host = process.env.REACT_APP_BACKEND_HOST
                const backend_port = process.env.REACT_APP_BACKEND_PORT
                await handlePostData(`http://${backend_host}:${backend_port}/transaction`, transactionData)
                localStorage.removeItem('shopping-cart')
                navigate('/user')
            }}>
                <Input type="date" label="Wybierz dzień dostawy:" id="order-select" onChange={(e) => {
                    setDelDate(e.target.value)
                }}/>
                <Container className="order-select">
                    <SelectDeliveryTime onChange={(e) => {
                        setDelTime((e.target.value).split("- ").pop())
                    }}/>
                </Container>
                <Container className="order-select">
                    <SelectPaymentMethod onChange={(e) => {
                        setPaymentMethod(e.target.value)
                    }}/><br/>
                </Container>
                <Button id="buy-button">Kup</Button>
            </Form>
        </Container>
    </>
}