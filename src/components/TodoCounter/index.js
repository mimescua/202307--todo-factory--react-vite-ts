import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1>
      {total === 0
        ? "You haven't any TODOS"
        : total === completed
        ? "Congrats! All of your todos has been completed"
        : `You completed ${completed} of ${total} TODOS`}
    </h1>
  );
}
export { TodoCounter };
