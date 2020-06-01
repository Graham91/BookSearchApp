import React, { useState } from "react";
import "./Searchbar.css";
function Searchbar(props) {
  const [text, updatetext] = useState("");

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;

    // Updating the input's state
    updatetext(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.search(text);
  };

  return (
    <div className="card">
      <input type="text" value={text} onChange={handleInputChange}></input>
      <input type="submit" onClick={handleFormSubmit}></input>
    </div>
  );
}

export default Searchbar;
