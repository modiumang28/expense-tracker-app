import styles from "./ExpenseForm.module.css";

export default function ExpenseForm(props) {
  const { expense, setExpense, txnData, setTxnData, balance, setBalance } =
    props;

  function handleSubmit(e) {
    e.preventDefault();

    // setTxnData([
    //   { text: expense.text, amount: expense.amount, id: expense.id },
    //   ...txnData,
    // ]);
    if (expense.amount != 0) {
      setTxnData([expense, ...txnData]);
      if (expense.amount > 0) {
        setBalance({
          income: Number(balance.income) + Number(expense.amount),
          expense: balance.expense,
        });
      } else {
        setBalance({
          income: balance.income,
          expense: Number(balance.expense) + Number(expense.amount),
        });
      }
    }
    setExpense({ text: "", amount: "", id: "" });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={expense.text}
        required
        onChange={(e) =>
          setExpense({
            text: e.target.value,
            amount: expense.amount,
            id: expense.id,
          })
        }
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={expense.amount}
        required
        onChange={(e) =>
          setExpense({
            text: expense.text,
            amount: e.target.value,
            id: expense.id,
          })
        }
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
