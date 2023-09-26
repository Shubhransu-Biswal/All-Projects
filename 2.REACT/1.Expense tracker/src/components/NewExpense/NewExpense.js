import React ,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props)=>{

    const [showForm , formstatus] = useState(false)

    let openFormInput = ()=>{
        formstatus(true)
    }

    let closeFormInput = ()=>{
        formstatus(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        formstatus(false)
    }

    return (
    <div className="new-expense">
         {showForm === false ? <button onClick={openFormInput}>Click Me</button> :
          <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}  cancel = {closeFormInput} />}
    </div>
    );
}

export default NewExpense;