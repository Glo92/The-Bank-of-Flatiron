import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(""); // Add category state

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { description, amount: parseFloat(amount), date, category }; // Include category
    addTransaction(newTransaction); // Call the addTransaction function passed from App
    setDescription(""); // Clear input fields
    setAmount("");
    setDate("");
    setCategory(""); // Clear category
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
            onChange={(e) => setCategory(e.target.value)} // Update category state
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

// import React, { useState } from "react";

// function AddTransactionForm({ addTransaction }) {
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");
//   const [category, setCategory] = useState(""); // State for category

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTransaction = {
//       description,
//       amount: parseFloat(amount),
//       date,
//       category, // Include category in the transaction object
//     };
//     addTransaction(newTransaction); // Call the addTransaction function passed from App
//     // Clear input fields
//     setDescription("");
//     setAmount("");
//     setDate("");
//     setCategory(""); // Clear category input
//   };

//   return (
//     <div className="ui segment">
//       <form className="ui form" onSubmit={handleSubmit}>
//         <h3>Add Transaction</h3>
//         <div className="inline fields">
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Category" // Adjust placeholder for clarity
//             value={category} // Use category state
//             onChange={(e) => setCategory(e.target.value)} // Update state on change
//           />
//           <input
//             type="number"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>
//         <button className="ui button" type="submit">
//           Add Transaction
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTransactionForm;
