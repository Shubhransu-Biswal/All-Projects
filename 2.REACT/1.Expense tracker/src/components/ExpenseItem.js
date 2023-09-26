import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.item}</h2>
          <div className="expense-item__price">₹{props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
