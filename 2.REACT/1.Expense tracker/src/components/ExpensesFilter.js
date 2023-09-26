import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectedOption = (event) => {
    let selectedValue = event.target.value;
    props.onSelectingOption(selectedValue);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.setOptionValue} onChange={selectedOption}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
