import React from "react";
import "./TodoSearch.css";
import searchIcon from "../assets/search-icon.svg";

function TodoSearch({ searchValue, setSearchValue, loading }) {
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
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };
