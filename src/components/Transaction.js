
function Transaction({ transactions }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description} - ${transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;
