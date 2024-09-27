// TransactionsList.js
import React from "react";

function TransactionsList({ transactions }) {
  return (
    <table className="ui table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;



// import React from "react";
// import Transaction from "./Transaction";

// function TransactionsList({transactions}) {
//   return (
//     <table className="ui celled striped padded table">
//      <thead>
//         <tr>
//           <th>
//             <h3 className="ui center aligned header">Date</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Description</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Category</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Amount</h3>
//           </th>
//         </tr>
//         {/* render a list of <Transaction> components here */}
//    <Transaction/>
//    </thead>
//     </table>
//   );
// }

// export default TransactionsList;
