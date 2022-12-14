import {Header} from "../Header";
import {AllTransactions} from "./AllTransactions";
import {Button} from "../Button";
import {Form} from "../Form";
import {useState} from "react";
import {handleDelData} from "../../functions/handleDelData";

export const DelTransactions = () => {
    const [transactionId, setTransactionId] = useState("")
    return <>
        <Form onSubmit={async (e) => {
            e.preventDefault()
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            await handleDelData(`http://${backend_host}:${backend_port}/transaction/${transactionId}`, localStorage.getItem('jwt-token'))
            window.location.reload(false)
        }}>
            <Header size="3">Usuwanie zamówień</Header>
            <AllTransactions onChange={async (e) => {
                setTransactionId(JSON.parse(e.target.value)[0])
            }} toShow={false}/><br/>
            <Button type="submit">
                Usuń
            </Button>
        </Form>

    </>
}