import React from "react";
import "./TodoSearch.css";
import searchIcon from "../assets/buscar.png";

function TodoSearch({ searchValue, setSearchValue }) {
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
