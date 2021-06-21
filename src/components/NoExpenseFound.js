import React from "react";

import Card from "../UI/card";
import "./NoExpenseFound.css";

const NoExpenseFound = () => {
  return (
    <Card width="28%" color="#d0704f">
      <div className="not-found">No Expense Found</div>
    </Card>
  );
};
export default NoExpenseFound;
