import React, { useState } from "react";

import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Cards className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Cards>
  );
};

export default Expenses;
