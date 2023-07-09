import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

export default function Transaction(props) {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  const { expense, index, txnData, setTxnData, balance, setBalance } = props;

  function handleDeleteExpense(i) {
    setTxnData(txnData.filter((txn, index) => i !== index));
    if (txnData[i].amount > 0) {
      setBalance({
        income: Number(balance.income) - Number(txnData[i].amount),
        expense: balance.expense,
      });
    } else {
      setBalance({
        income: balance.income,
        expense: Number(balance.expense) - Number(txnData[i].amount),
      });
    }
  }

  function handleEditExpense(i) {}

  return (
    <li
      key={expense.id}
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => {
        setCurrentHoverIndex(index);
      }}
      onMouseLeave={() => {
        setCurrentHoverIndex(null);
      }}
    >
      <div>{expense.text}</div>
      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${
            currentHoverIndex === index && styles.movePrice
          }`}
        >
          ${expense.amount}
        </div>
        <div
          className={`${styles.btnContainer} ${
            currentHoverIndex === index && styles.active
          }`}
        >
          <div
            className={styles.edit}
            onClick={() => {
              handleEditExpense(index);
            }}
          >
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          <div
            className={styles.delete}
            onClick={() => handleDeleteExpense(index)}
          >
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
}
