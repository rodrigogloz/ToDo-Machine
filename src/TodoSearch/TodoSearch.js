import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";
import searchIcon from "../assets/buscar.png";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearchMain">
      <img src={searchIcon} alt="search icon" />
      <input
        className="TodoSearch"
        placeholder={`Buscar...`}
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
