import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { description, amount: parseFloat(amount), date, category }; 
    addTransaction(newTransaction); 
    setDescription(""); 
    setAmount("");
    setDate("");
    setCategory(""); 
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <h3>Add Transaction</h3>
        <div className="inline fields">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button className="ui button" type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
