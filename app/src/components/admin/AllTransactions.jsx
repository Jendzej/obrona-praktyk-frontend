import {useEffect, useState} from "react";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {Header} from "../Header";

export const AllTransactions = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        async function fetchData() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/transaction/all`, localStorage.getItem('jwt-token'))
            setTransactions(data)
        }

        fetchData()
    }, [])
    if (transactions.length !== 0) {
        const transactionTimes = transactions.map(transaction => transaction.transaction_time)
        const grouped = [...new Set(transactionTimes)]

        return <>
            <Header size="3">Zamówienia użytkowników</Header>
            <table id="transactions">
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
        </>
    } else {
        return <>
            <Header size="3">Zamówienia użytkowników</Header>
            <Header size="4">Brak zamówień...</Header>
        </>
    }
}