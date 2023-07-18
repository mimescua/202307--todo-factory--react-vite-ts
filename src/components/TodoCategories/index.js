import React from "react";
import { TodoContext } from "../../context";
import "./TodoCategories.css";

function TodoCategories() {
  const { categories } = React.useContext(TodoContext);
  return (
    <div className="categories">
      <h3>User's categories</h3>
      {categories.map((category, index) => (
        <button key={index}>{category.text}</button>
      ))}
    </div>
  );
}
export { TodoCategories };
