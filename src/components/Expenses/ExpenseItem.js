import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Cards from "../UI/Cards";
const ExpenseItem = (props) => {
  //function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpemseItem evaluated by React");
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
};

export default ExpenseItem;
