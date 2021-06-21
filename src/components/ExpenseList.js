import React from "react";

import Card from "../UI/card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.toLocaleString("en-IN", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <Card borderRadius="16px">
      <div className="row">
        <div className="col">
          <div className="date-card">
            <div className="date-card__month">{month}</div>
            <div className="date-card__year">{year}</div>
            <div className="date-card__day">{day}</div>
          </div>
        </div>
        <div className="col-7 title-card">
          <h1>{props.title}</h1>
        </div>
        <div className="col amount-card">
          <div className="amount-card__amount">${props.amount}</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseList;
