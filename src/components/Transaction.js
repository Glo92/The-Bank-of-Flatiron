import React from 'react';

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


// import React from "react";

// function Transaction({ date, description, category, amount }) {
//   return (
//     <tr>
//       <td>{date}</td>
//       <td>{description}</td>
//       <td>{category}</td>
//       <td>{amount}</td>
//     </tr>
//   );
// }

// export default Transaction;
