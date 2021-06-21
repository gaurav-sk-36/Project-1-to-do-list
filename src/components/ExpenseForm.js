import React, { useState } from "react";

import Card from "../UI/card";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({ title: "", date: "", amount: "" });

  const titleChangeHandler = (event) => {
    setFormData((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const formSubmitHandler = (form) => {
    form.preventDefault();
    const data = {
      id: Math.random(),
      title: formData.title,
      date: formData.date,
      amount: formData.amount,
    };
    // Passing Form Data to upper Component or Parent Component i.e New Expense
    props.handleForm(data);

    // Call this fucntion for Make For is Submitted Succesfully
    props.onSubmitForm();
  };

  const amountChangeHandler = (event) => {
    setFormData((prevState) => ({ ...prevState, amount: event.target.value }));
  };

  const dateChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      date: new Date(event.target.value),
    }));
  };

  return (
    <Card color="burlywood" marginTop="13px" width="70%">
      <form onSubmit={formSubmitHandler}>
        <div className="row m-2">
          <div className="col">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={titleChangeHandler}
              required="true"
            />
          </div>
          <div className="col">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              className="form-control"
              placeholder="Amount"
              onChange={amountChangeHandler}
              required="true"
            />
          </div>
        </div>
        <div className="row m-2 mt-4">
          <div className="col">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              onChange={dateChangeHandler}
              required="true"
            />
          </div>
          <div className="col button-row">
            <button
              type="submit"
              className="btn btn-primary mb-2 custom-button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
