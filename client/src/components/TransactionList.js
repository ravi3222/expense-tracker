import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/TransactionList.css";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(transactions);

  return (
    <div className="transactionList">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
