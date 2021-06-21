import React from "react";

import ExpenseList from "./ExpenseList";

const ExpenseItem = (props) => {
  return (
    <div>
      {props.expenseList.map((expense) => (
        <ExpenseList
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default ExpenseItem;
