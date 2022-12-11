import {Container} from "../Container";
import {Header} from "../Header";
import {handleFetchJWT} from "../../functions/handleFetchJWT";
import {useEffect, useState} from "react";
import {TransactionItem} from "./TransactionItem";
import {Button} from "../Button";

export const Transactions = () => {
    const [transactionData, setTransactionData] = useState([])
    const [showTransactions, setShowTransactions] = useState(false)
    useEffect(() => {
        async function fetchUserTransaction() {
            const backend_host = process.env.REACT_APP_BACKEND_HOST
            const backend_port = process.env.REACT_APP_BACKEND_PORT
            const data = await handleFetchJWT(`http://${backend_host}:${backend_port}/transaction`, localStorage.getItem('jwt-token'))
            setTransactionData(data)
        }

        fetchUserTransaction()
    }, [])

    const showButton = document.getElementById("transaction-show")
    console.log(showButton)
    if (showButton !== null) {
        if (showTransactions) {
            showButton.textContent = "Ukryj wszystkie zamówienia"
        } else {
            showButton.textContent = "Pokaż wszystkie zamówienia"
        }
    }

    if (transactionData.length > 0) {
        const transactionTimes = transactionData.map(transaction => transaction.transaction_time)
        const grouped = [...new Set(transactionTimes)]
        return <>
            <Header size="1" className="header-list">Historia zamówień</Header>
            <Container className="centered">
                <Button id="transaction-show" onClick={() => {
                    setShowTransactions(!showTransactions)
                }}>Pokaż wszystkie zamówienia</Button>
            </Container>
            <Container className="all-transactions">
                {grouped.map(transactionTime => {
                    const transactionParsed = new Date(Date.parse(transactionTime)).toLocaleString()
                    let transactionValue = 0
                    return (
                        <>
                            {!showTransactions ? <Container></Container>
                                : <Container className="single-transaction" id={transactionTime}>
                                    <Container className='transaction-time'>
                                        <Header size="3">Data zamówienia: {transactionParsed}</Header>
                                    </Container>
                                    {transactionData.filter(transaction => transaction.transaction_time === transactionTime).map(transaction => {
                                        transactionValue += transaction.item_price
                                        return <>
                                            <TransactionItem item_id={transaction.item_id}
                                                             item_price={transaction.item_price}/>
                                        </>
                                    })}
                                    <Header size="3" className="transaction-price">Wartość
                                        zamówienia: {Math.round(transactionValue * 100) / 100} zł</Header>
                                </Container>}

                        </>)
                })}
            </Container>
        </>
    } else {
        return <>
            <Header size="1">Lista transakcji</Header>
            <Header size="3">Nie masz jeszcze żadnych transakcji...</Header>
        </>
    }

}