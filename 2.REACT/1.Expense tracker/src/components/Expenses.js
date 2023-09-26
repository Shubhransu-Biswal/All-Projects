import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selectedOptionValue, changedOptionValue] = useState("2023");
  const selected = (option) => {
    changedOptionValue(option);
  };

  const filteredExpenses = props.spendings.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedOptionValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          setOptionValue={selectedOptionValue}
          onSelectingOption={selected}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
