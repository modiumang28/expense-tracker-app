import React from "react";
import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./Components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./Components/ExpenseList/ExpenseList";

export default function App() {
  const [expense, setExpense] = useState({
    text: "",
    amount: "",
    id: new Date().getTime(),
  });
  const [balance, setBalance] = useState({ income: 0, expense: 0 });
  const [txnData, setTxnData] = useState([]);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          expense={expense}
          setExpense={setExpense}
          txnData={txnData}
          setTxnData={setTxnData}
          balance={balance}
          setBalance={setBalance}
        />
        <div className="expenseContainer">
          <ExpenseInfo balance={balance} />
          <ExpenseList
            txnData={txnData}
            setTxnData={setTxnData}
            balance={balance}
            setBalance={setBalance}
          />
        </div>
      </div>
    </>
  );
}
