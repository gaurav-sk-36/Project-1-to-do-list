import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import NoExpenseFound from "./NoExpenseFound";
import "./Expenses.css";

const Expenses = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Wash",
      amount: 100,
      date: new Date(2024, 9, 17),
    },
    {
      id: "e2",
      title: "Phone Buy",
      amount: 600,
      date: new Date(2021, 9, 17),
    },
    {
      id: "e3",
      title: "Laptop Buy",
      amount: 700,
      date: new Date(2021, 11, 10),
    },
    {
      id: "e4",
      title: "Buy Stock",
      amount: 1000,
      date: new Date(2021, 7, 10),
    },
  ];
  const [allExpense, addExpense] = useState(expenses);
  const [selectYear, setSelectYear] = useState("2020");

  const handleData = (data) => {
    addExpense((prevState) => {
      return [data, ...allExpense];
    });
  };

  const handleFilter = (year) => {
    setSelectYear(year);
    // allExpense.filter((expense) => expense.date.getFullYear() === year);
  };

  const filteredData = allExpense.filter(
    (expense) => String(expense.date.getFullYear()) === selectYear
  );

  return (
    <div>
      <NewExpense newExpenseData={handleData} />
      <ExpenseFilter onChangeSelect={handleFilter} />
      {filteredData.length === 0 && <NoExpenseFound />}
      {filteredData.length > 0 && <ExpenseItem expenseList={filteredData} />}
    </div>
  );
};

export default Expenses;
