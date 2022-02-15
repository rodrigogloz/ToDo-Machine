import React from "react";
import "./TodoItem.css";
import deleteButton from "../assets/delete-button.png";
import checkButton from "../assets/circle.png";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <p
        src={checkButton}
        alt="check button"
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        ✔
      </p>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <p
        src={deleteButton}
        className="Icon Icon-delete"
        onClick={props.onDelete}
        alt="delete button"
      >
        ✖
      </p>
    </li>
  );
}

export { TodoItem };
