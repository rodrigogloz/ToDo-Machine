import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length <= 0) return;
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className="formModal">
      <textarea
        className="formText"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aquí tu tarea..."
      />
      <div className="formButtons">
        <button type="button" onClick={onCancel} className="cancelButton">
          Cancelar
        </button>
        <button type="submit" className="submitButton">
          Añadir tarea
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
