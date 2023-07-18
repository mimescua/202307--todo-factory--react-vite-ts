import React from "react";
import { TodoContext } from "../../context";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h1>
      {totalTodos === 0
        ? "You haven't any TODOS"
        : totalTodos === completedTodos
        ? "Congrats! All of your todos has been completed"
        : `You completed ${completedTodos} of ${totalTodos} TODOS`}
    </h1>
  );
}
export { TodoCounter };
