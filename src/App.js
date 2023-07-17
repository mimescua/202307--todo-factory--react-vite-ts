import { useState } from 'react'
import { Sidebar } from "./components/Sidebar";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodo } from "./components/Buttons/CreateTodo";
import { Category } from "./components/Buttons/Category";
import { generateColor, prevent } from "./utils";

import "./App.css";

const defaultCategories = [
  { text: "Importants", color: generateColor() },
  { text: "Planned", color: generateColor() },
  { text: "Personal", color: generateColor() },
];

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

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos = [];
  !localStorageTodos
    ? localStorage.setItem('TODOS_V1', JSON.stringify([]))
    : parsedTodos = JSON.parse(localStorageTodos);
  
  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completed = todos.filter((todo) => !!todo.completed).length
  const searchedTodos = todos.filter((todo)=> todo.text.toUpperCase().includes(searchValue.toUpperCase()))
  
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }
  const handleDeleteTodo = (event) => {
    if(!event.target.value) return;
    const index = todos.findIndex(object => object.created === event.target.value);
    const currentTodos = [...todos]
    currentTodos.splice(index, 1);
    saveTodos(currentTodos)
  }
  const handleCompleteTodo = (created) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.created === created)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
  }

  return (
    <>
      <Sidebar>
        <TodoCounter completed={completed} total={todos.length} />
        <div className="categories">
          <h3>User's categories</h3>
          {defaultCategories.map((category, index) => (
            <button key={index}>{category.text}</button>
          ))}
        </div>
      </Sidebar>
      <main className="main">
        <div className="search">
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="content">
          <div className="list">
            <h3>CATEGORIES</h3>
            <div className="categories">
              {defaultCategories.map((category, index) => (
                <Category
                  key={index}
                  total={
                    todos.filter((todo) => todo.category === category.text).length
                  }
                  text={category.text}
                  color={category.color}
                />
              ))}
            </div>
            <h3 style={{marginTop: '3rem'}}>TODAY'S TODOS</h3>
            <TodoList>
              {searchedTodos.map((todo, index) => (
                <TodoItem
                  key={todo.created}
                  text={todo.text}
                  color={
                    defaultCategories.find(
                      (category) => category.text === todo.category
                    ).color
                  }
                  completed={todo.completed}
                  created={todo.created}
                  onComplete={() => handleCompleteTodo(todo.created)}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </TodoList>
            <CreateTodo />
          </div>
          <div className="body"></div>
        </div>
      </main>
    </>
  );
}

export default App;
