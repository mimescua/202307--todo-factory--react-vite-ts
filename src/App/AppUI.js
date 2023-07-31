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
		<TodoContext.Consumer>
			{({
				loading,
				error,
				categories,
				totalByCategory,
				completedTodos,
				totalTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				handleAddTodo,
				handleDeleteTodo,
				handleCompleteTodo,
				openPanel,
				setOpenPanel,
			}) => (
				<>
					<h1 className="logo">TODO ✅ Factory</h1>
					<Sidebar>
						<TodoCategories
							categories={categories}
							completedTodos={completedTodos}
							totalTodos={totalTodos}
							totalByCategory={totalByCategory}
						/>
						<TodoCounter
							totalTodos={totalTodos}
							completedTodos={completedTodos}
						/>
					</Sidebar>
					<main className="main">
						<h3 className="todos-title">TODAY'S TODOS</h3>
						<TodoSearch
							searchValue={searchValue}
							setSearchValue={setSearchValue}
						/>
						<div className="content">
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
							<CreateTodo setOpenPanel={setOpenPanel} />
							{openPanel && (
								<SidePanel>
									<TodoForm
										categories={categories}
										setOpenPanel={setOpenPanel}
										handleAddTodo={handleAddTodo}
									/>
								</SidePanel>
							)}
						</div>
					</main>
				</>
			)}
		</TodoContext.Consumer>
	);
}

export { AppUI };
