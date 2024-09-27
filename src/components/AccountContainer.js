import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, addTransaction }) {
  const [myTransactionData, setMyTransactionData] = useState(transactions);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions); 

  useEffect(() => {
    setMyTransactionData(transactions);
    setFilteredTransactions(transactions); 
  }, [transactions]);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = myTransactionData.filter(transaction =>
      transaction.description.toLowerCase().includes(lowercasedQuery) || 
      transaction.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTransactions(filtered); 
  };

  return (
    <div>
      <Search onSearch={handleSearch} /> 
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={filteredTransactions} /> 
    </div>
  );
}

export default AccountContainer;
