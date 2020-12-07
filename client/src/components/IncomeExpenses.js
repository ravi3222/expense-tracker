import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/IncomeExpenses.css";
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc, item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="incomeExpenses">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +<span>&#x20B9;</span>
          {numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">
          -<span>&#x20B9;</span>
          {numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};
