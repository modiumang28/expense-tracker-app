import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList(props) {
  const { txnData, setTxnData, balance, setBalance } = props;

  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {txnData.map((txn, i) => {
          return (
            <Transaction
              expense={txn}
              key={i}
              index={i}
              txnData={txnData}
              setTxnData={setTxnData}
              balance={balance}
              setBalance={setBalance}
            />
          );
        })}
      </ul>
    </div>
  );
}
