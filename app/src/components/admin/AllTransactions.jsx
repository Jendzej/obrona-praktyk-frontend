import {useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {Header} from "../Header";
import {Container} from "../Container";
import {Button} from "../Button";

export const AllTransactions = ({toShow = true, onChange}) => {
    const [transactions, setTransactions] = useState([])
    const [showList, setShowList] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/transaction/all`, localStorage.getItem('jwt-token'))
            setTransactions(data)
        }

        fetchData()
    }, [])
    const button = document.getElementById("show-transactions")
    if (button !== null) {
        if (showList) {
            button.textContent = "Schowaj"
        } else {
            button.textContent = "Rozwiń"
        }
    }
    if (transactions.length !== 0) {
        const transactionTimes = transactions.map(transaction => transaction.transaction_time)
        const grouped = [...new Set(transactionTimes)]
        if (toShow) {
            return <>
                <Header size="2">Zamówienia użytkowników</Header>
                <Button id="show-transactions" onClick={() => {
                    setShowList(!showList)
                }}>Rozwiń</Button>
                {showList ? <table id="transactions">
                        <thead>
                        <td>Czas transakcji</td>
                        <td>ID użytkownika</td>
                        <td>ID przedmiotów</td>
                        <td>Wartość transakcji</td>
                        <td>Status płatności</td>
                        <td>Data dostawy</td>
                        </thead>
                        <tbody>
                        {grouped.map(transactionTime => {
                            const transactionParsed = new Date(Date.parse(transactionTime)).toLocaleString()
                            const transactionValue = (transactions.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => transaction.item_price)).reduce((a, b) => a + b)
                            const transactionItems = transactions.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => transaction.item_id)
                            const transactionUser = transactions.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => transaction.user_id)[0]
                            const paymentStatus = transactions.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => transaction.payment_status)[0]
                            const deliveryTime = transactions.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => transaction.delivery_time)[0]
                            return <>
                                <tr>
                                    <td>{transactionParsed}</td>
                                    <td>{transactionUser}</td>
                                    <td>{transactionItems.join(", ")}</td>
                                    <td>{transactionValue}</td>
                                    <td>{paymentStatus}</td>
                                    <td>{new Date(Date.parse(deliveryTime)).toLocaleString()}</td>
                                </tr>
                            </>
                        })}
                        </tbody>
                    </table>
                    : <Container></Container>}

            </>

        } else {
            let groupedTransactions = []
            grouped.map(transactionTime => {
                const transactionParsed = new Date(Date.parse(transactionTime)).toLocaleString()
                const transactionIds = transactions.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => transaction.id)
                groupedTransactions.push({transaction_date: transactionParsed, transaction_ids: transactionIds})
            })
            if (grouped.length === groupedTransactions.length) {
                return <>
                    <label for="select-transaction">Data zamówienia: </label>
                    <select id="select-transaction" onChange={onChange}>
                        {groupedTransactions.map((transaction, index) => (
                            <option key={index}
                                    value={JSON.stringify(transaction.transaction_ids)}>{transaction.transaction_date}</option>
                        ))}
                    </select>
                </>
            }
        }
    } else {
        return <>
            <Header size="3">Zamówienia użytkowników</Header>
            <Header size="4">Brak zamówień...</Header>
        </>
    }
}