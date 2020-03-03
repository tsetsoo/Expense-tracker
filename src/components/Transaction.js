import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    function handleDeleteTransaction() {
        deleteTransaction(transaction.id)
    }

    const sign = transaction.amount >= 0 ? "+" : "-"
    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={handleDeleteTransaction} className="delete-btn">x</button>
        </li>
    )
}
