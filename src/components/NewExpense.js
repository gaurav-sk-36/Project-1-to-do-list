import React, { useState } from "react";
import Card from "../UI/card";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const addExpenseHandler = () => {
    setIsFormOpen(true);
  };

  const formClosehandler = () => {
    setIsFormOpen(false);
  };

  const handleForm = (data) => {
    // passing Form data to upper Component i.e Expenses
    props.newExpenseData(data);
  };
  return (
    <div>
      {!isFormOpen && (
        <Card color="burlywood" marginTop="13px" width="70%">
          <button
            onClick={addExpenseHandler}
            className="btn btn-primary custom-button card-button"
          >
            Add Expense
          </button>
        </Card>
      )}

      {isFormOpen && (
        <ExpenseForm onSubmitForm={formClosehandler} handleForm={handleForm} />
      )}
    </div>
  );
};

export default NewExpense;
