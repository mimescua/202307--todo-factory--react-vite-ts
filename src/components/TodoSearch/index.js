import React from "react";
import { TodoContext } from "../../context";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="search">
    <input
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
    </div>
  );
}

export { TodoSearch };
