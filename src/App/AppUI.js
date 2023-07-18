import React from "react";
import { Sidebar } from "../components/Sidebar";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCategories } from "../components/TodoCategories";
import { CreateTodo } from "../components/Buttons/CreateTodo";
import { Category } from "../components/Buttons/Category";
import { TodosLoading, TodosError, NoTodos } from "../components/Warnings";
import "./App.css";
import { TodoContext } from "../context";
import { isEmptyArray } from '../utils'

function AppUI() {
  const { totalByCategory } = React.useContext(TodoContext);
  return (
    <>
      <Sidebar>
        <TodoCounter />
        <TodoCategories />
      </Sidebar>
      <main className="main">
        <TodoSearch />
        <div className="content">
          <div className="list">
            <h3>CATEGORIES</h3>
            <TodoContext.Consumer>
              {({
                loading,
                error,
                categories,
                searchedTodos,
                handleDeleteTodo,
                handleCompleteTodo,
              }) => (
                <>
                  <div className="categories">
                    {categories.map((category, index) => (
                      <Category
                        key={index}
                        total={
                          totalByCategory()[category.text]
                          // todos.filter((todo) => todo.category === category.text).length
                        }
                        text={category.text}
                        color={category.color}
                      />
                    ))}
                  </div>
                  <h3 style={{ marginTop: "3rem" }}>TODAY'S TODOS</h3>
                  <TodoList>
                    {loading && <TodosLoading />}
                    {error && <TodosError />}
                    {!loading && isEmptyArray(searchedTodos) && <NoTodos />}
                    {searchedTodos.map((todo, index) => (
                      <TodoItem
                        key={todo.created}
                        text={todo.text}
                        color={
                          categories.find(
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
                </>
              )}
            </TodoContext.Consumer>
            <CreateTodo />
          </div>
          <div className="body"></div>
        </div>
      </main>
    </>
  );
}

export { AppUI };
