import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/Balance.css";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>
        <span>&#x20B9;</span>
        {numberWithCommas(total)}
      </h1>
    </div>
  );
};
