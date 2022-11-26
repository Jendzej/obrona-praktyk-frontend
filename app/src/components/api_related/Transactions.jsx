import {Container} from "../Container";
import {Header} from "../Header";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {useEffect, useState} from "react";
import {TransactionItem} from "./TransactionItem";

export const Transactions = () => {
    const [transactionData, setTransactionData] = useState([])
    useEffect(() => {
        async function fetchUserTransaction() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/transaction`, localStorage.getItem('jwt-token'))
            setTransactionData(data)
        }

        fetchUserTransaction()
    }, [])
    if (transactionData.length > 0) {
        const transactionTimes = transactionData.map(transaction => transaction.transaction_time)
        const grouped = [...new Set(transactionTimes)]
        return <>
            <Header size="1">Transactions</Header>
            {grouped.map(transactionTime => {
                const transactionParsed = new Date(Date.parse(transactionTime)).toLocaleString()
                let transactionValue = 0
                return (
                    <>
                        <Container className="single-transaction" id={transactionTime}>
                            <Container className='transaction-time'>
                                <Header size="3">Transaction time: {transactionParsed}</Header>
                            </Container>
                            {transactionData.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => {
                                transactionValue += transaction.item_price
                                return <>
                                    <TransactionItem item_id={transaction.item_id} item_price={transaction.item_price}/>
                                </>
                            })}
                            <Header size="3" className="transaction-price">Value of
                                transaction: {transactionValue} zł</Header>
                        </Container>
                    </>)
            })}
        </>
    } else {
        return <>
            <Header size="1">Transactions</Header>
            <Header size="3">You don't have any transactions yet</Header>
        </>
    }

}