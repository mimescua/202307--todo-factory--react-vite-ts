import React, { useState } from "react";
import { generateColor } from "../utils";
import { useLocalStorage } from "../hooks";

const TodoContext = React.createContext();

const defaultCategories = [
  { text: "Importants", color: generateColor() }, // : used to change name
  { text: "Planned", color: generateColor() },
  { text: "Personal", color: generateColor() },
];

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toUpperCase().includes(searchValue.toUpperCase())
  );

  const totalByCategory = () => {
    const categories = defaultCategories.map((category) => category.text);
    const initialCategories = categories.map((name) => ({ [name]: 0 }));
    let countedCategories = {};
    for (let i = 0; i < initialCategories.length; i++) {
      Object.assign(countedCategories, initialCategories[i]);
    }
    for (let i = 0; i < todos.length; i++) {
      countedCategories[todos[i].category] += 1;
    }
    return countedCategories;
  };
  const handleDeleteTodo = (event) => {
    if (!event.target.value) return;
    const index = todos.findIndex(
      (object) => object.created === event.target.value
    );
    const currentTodos = [...todos];
    currentTodos.splice(index, 1);
    saveTodos(currentTodos);
  };
  const handleCompleteTodo = (created) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.created === created);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        categories: defaultCategories,
        totalByCategory,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        handleDeleteTodo,
        handleCompleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

{/* 
const defaultTodos = [
  {
    text: "Crear App",
    completed: false,
    category: "Planned",
    created: "2023-07-13T22:06:27.761Z",
  },
  {
    text: "Probar App",
    completed: false,
    category: "Importants",
    created: "2023-07-14T22:06:27.761Z",
  },
  {
    text: "Desplegar App",
    completed: true,
    category: "Importants",
    created: "2023-07-12T22:06:27.761Z",
  },
];
*/}
