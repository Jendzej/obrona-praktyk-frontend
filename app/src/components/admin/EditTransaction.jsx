import {AllTransactions} from "./AllTransactions";
import {useState} from "react";
import {Form} from "../Form";
import {Button} from "../Button";
import {handleEditData} from "../../functions/handleEditData";
import {Header} from "../Header";

export const EditTransaction = () => {
    const [transactionIds, setTransactionIds] = useState([])
    const [paymentStatus, setPaymentStatus] = useState("")
    return <>
        <Header size="3">Edycja i aktualizacja zamówień</Header>
        <Form onSubmit={async (e) => {
            e.preventDefault()
            const updatedTransaction = {
                payment_status: paymentStatus,
            }
            const notNullUpdated = Object.fromEntries(Object.entries(updatedTransaction).filter(([_, v]) => v != null && v != ""))
            if (Object.keys(notNullUpdated).length !== 0) {
                for (let transaction of transactionIds) {
                    await handleEditData(transaction, {updated_transaction: notNullUpdated}, 'transaction')
                }
            }

        }}>
            <AllTransactions toShow={false} onChange={(e) => {
                setTransactionIds(JSON.parse(e.target.value))
            }}/><br/>
            <label for="payment-choice">Status płatności: </label>
            <select id="payment-choice" onChange={(e) => {
                setPaymentStatus(e.target.value)
            }}>
                <option value="paid">Zapłacono (paid)</option>
                <option value="pending">Oczekiwanie (pending)</option>
                <option value="not_paid">Nie zapłacono (not_paid)</option>
                <option value="other">Inne (other)</option>
            </select><br/>
            <Button type="submit">Zapisz</Button>
        </Form>

    </>
}