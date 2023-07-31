import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { SidePanel } from '../components/SidePanel';
import { TodoForm } from '../components/TodoForm';
import { TodoCategories } from '../components/TodoCategories';
import { CreateTodo } from '../components/Buttons/CreateTodo';
import { TodosLoading, TodosError, NoTodos } from '../components/Warnings';
import './App.css';
import { TodoContext } from '../context';
import { isEmptyArray } from '../utils';

function AppUI() {
	return (
		<>
			<h1 className="logo">TODO ✅ Factory</h1>
			<Sidebar>
				<TodoCategories />
				<TodoCounter />
			</Sidebar>
			<main className="main">
				<h3 className="todos-title">TODAY'S TODOS</h3>
				<TodoSearch />
				<div className="content">
					<TodoContext.Consumer>
						{({
							loading,
							error,
							categories,
							searchedTodos,
							handleDeleteTodo,
							handleCompleteTodo,
							openPanel,
							setOpenPanel,
						}) => (
							<>
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
								{openPanel && (
									<SidePanel>
										<TodoForm />
									</SidePanel>
								)}
							</>
						)}
					</TodoContext.Consumer>
					<CreateTodo />
				</div>
			</main>
		</>
	);
}

export { AppUI };
