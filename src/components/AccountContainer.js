import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, addTransaction }) {
  const [myTransactionData, setMyTransactionData] = useState(transactions);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions); // New state for filtered transactions

  useEffect(() => {
    setMyTransactionData(transactions);
    setFilteredTransactions(transactions); // Initialize filtered transactions on prop change
  }, [transactions]);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = myTransactionData.filter(transaction =>
      transaction.description.toLowerCase().includes(lowercasedQuery) || // Filter by description
      transaction.category.toLowerCase().includes(lowercasedQuery) // Filter by category
    );
    setFilteredTransactions(filtered); // Update filtered transactions
  };

  return (
    <div>
      <Search onSearch={handleSearch} /> {/* Pass the handleSearch function */}
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={filteredTransactions} /> {/* Display filtered transactions */}
    </div>
  );
}

export default AccountContainer;



// import React, { useState, useEffect } from "react";
// import TransactionsList from "./TransactionsList";
// import Search from "./Search";
// import AddTransactionForm from "./AddTransactionForm";

// function AccountContainer() {
//   const [myTransactionData, setMyTransactionData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8001/transactions")
//       .then((response) => response.json())
//       .then((data) => {
//         setMyTransactionData(data);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   }, []);

//   const addTransaction = (newTransaction) => {
//     const transactionWithId = {
//       ...newTransaction,
//       id: myTransactionData.length + 1,
//     };
//     setMyTransactionData((prevData) => [...prevData, transactionWithId]);
//   };

//   return (
//     <div>
//       <Search />
//       <AddTransactionForm addTransaction={addTransaction} />
//       <TransactionsList transactions={myTransactionData} />
//     </div>
//   );
// }

// export default AccountContainer;

