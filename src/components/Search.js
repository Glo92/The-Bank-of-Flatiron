import React from "react";

function Search({ onSearch }) { // Receive onSearch as a prop
  const handleChange = (e) => {
    onSearch(e.target.value); // Call onSearch with the current input value
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange} // Update to call handleChange
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;


// import React from "react";

// function Search() {
//   return (
//     <div className="ui large fluid icon input">
//       <input
//         type="text"
//         placeholder="Search your Recent Transactions"
//         onChange={() => console.log("Searching...")}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   );
// }

// export default Search;
