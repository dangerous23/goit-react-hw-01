import style from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  const transactionHistory = transactions.map(transaction => (
      <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
      </tr>
  ));

  return (
      <table className={style.transationHistory}>
          <thead>
              <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
          </thead>
          <tbody>
              {transactionHistory}
          </tbody>
      </table>
  );
}