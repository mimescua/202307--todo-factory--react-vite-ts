import React from 'react';
import { CreateTodo } from '../components/Buttons/CreateTodo';
import { ChangeAlert } from '../components/ChangeAlert';
import { SidePanel } from '../components/SidePanel';
import { Sidebar } from '../components/Sidebar';
import { TodoCategories } from '../components/TodoCategories';
import { TodoCounter } from '../components/TodoCounter';
import { TodoForm } from '../components/TodoForm';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import {
	NoTodos,
	TodosEmptySearch,
	TodosError,
	TodosLoading,
} from '../components/Warnings';
import { useTodos } from '../hooks';
import './App.css';

function App() {
	const { state, stateUpdaters } = useTodos();

	const {
		loading,
		error,
		categories,
		totalByCategory,
		totalTodos,
		completedTodos,
		searchValue,
		searchedTodos,
		openPanel,
	} = state;

	const {
		setSearchValue,
		handleAddTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		setOpenPanel,
		sincronizeTodos,
	} = stateUpdaters;

	return (
		<>
			<h1 className="logo">TODO ✅ Factory</h1>
			<Sidebar loading={loading}>
				<TodoCategories
					categories={categories}
					completedTodos={completedTodos}
					totalTodos={totalTodos}
					totalByCategory={totalByCategory}
				/>
				<TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
			</Sidebar>
			<main className="main">
				<h3 className="todos-title">TODAY'S TODOS</h3>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					loading={loading}
				/>
				<div className="content">
					<TodoList
						error={error}
						loading={loading}
						totalTodos={totalTodos}
						searchedTodos={searchedTodos}
						onError={() => <TodosError />}
						onLoading={() => <TodosLoading />}
						onEmptysearchResult={() => (
							<TodosEmptySearch searchValue={searchValue} />
						)}
						onEmptyTodos={() => <NoTodos />}
					>
						{(todo) => (
							<TodoItem
								key={todo.created}
								text={todo.text}
								color={
									categories.find((category) => category.text === todo.category)
										.color
								}
								completed={todo.completed}
								created={todo.created}
								onComplete={() => handleCompleteTodo(todo.created)}
								onDelete={handleDeleteTodo}
							/>
						)}
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
			<ChangeAlert sincronize={sincronizeTodos} />
		</>
	);
}

export default App;
