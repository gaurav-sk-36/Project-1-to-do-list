import React from "react";

import Card from "../UI/card";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectOnChnageHandler = (e) => {
    props.onChangeSelect(e.target.value);
  };

  return (
    <Card color="#a6b6ca" marginTop="13px">
      <div className="row">
        <div className="col title-col">
          <h4 className="title-content">Filtered Result</h4>
        </div>
        <div className="col-6"></div>
        <div className="col">
          <div className="expense-filter">
            <label>Filter by :</label>
            <select
              name="year"
              id="cars"
              className="year-filter form-select"
              onChange={selectOnChnageHandler}
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default ExpenseFilter;
