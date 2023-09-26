import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props)=>{

    if(props.item.length === 0) {

      return  <h2 className="expenses-list__fallback">Expenses Not Found</h2>

    }

        return (
            <ul className="expenses-list">

                {props.item.map((expense)=>{   
                return <ExpenseItem
                 key = {expense.id}
                 item = { expense.title }
                 price = { expense.amount }
                 date = { expense.date }
                    /> 
                })}

            </ul>

        )
}

export default ExpensesList;