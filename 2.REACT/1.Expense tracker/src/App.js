import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Shaving Cream",
    amount: 95,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 6500, date: new Date(2024, 2, 12) },
  {
    id: "e3",
    title: "Bicycle",
    amount: 3000,
    date: new Date(2024, 1, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 1500,
    date: new Date(2023, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses spendings={expenses} />
    </div>
  );
};

export default App;
