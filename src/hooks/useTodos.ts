import React from 'react';
import { useLocalStorage } from '.';
import { Category, Todo, TodoState, TodoStateUpdaters } from '../types';
import { generateColor } from '../utils';

const defaultCategories: Category[] = [
	{ text: 'Importants', color: generateColor() }, // : used to change name
	{ text: 'Planned', color: generateColor() },
	{ text: 'Personal', color: generateColor() },
];

function useTodos() {
	const {
		item: todos,
		saveItem: saveTodos,
		sincronizeItem: sincronizeTodos,
		loading,
		error,
	} = useLocalStorage<Todo[]>('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openPanel, setOpenPanel] = React.useState(false);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;
	const searchedTodos = todos.filter((todo) => todo.text.toUpperCase().includes(searchValue.toUpperCase()));

	const totalByCategory = (): Record<string, number> => {
		const categories = defaultCategories.map((category) => category.text);
		const initialCategories = categories.map((name) => ({ [name]: 0 }));
		let countedCategories: Record<string, number> = {};
		for (let i = 0; i < initialCategories.length; i++) {
			Object.assign(countedCategories, initialCategories[i]);
		}
		for (let i = 0; i < todos.length; i++) {
			countedCategories[todos[i].category] += 1;
		}
		return countedCategories;
	};

	const handleAddTodo = (text: string, completed: boolean, category: string, created: string) => {
		const newTodos = [...todos];
		newTodos.push({ text, completed, category, created });
		saveTodos(newTodos);
	};
	const handleDeleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!event.currentTarget.value) return;
		const index = todos.findIndex((object) => object.created === event.currentTarget.value);
		const currentTodos = [...todos];
		currentTodos.splice(index, 1);
		saveTodos(currentTodos);
	};
	const handleCompleteTodo = (created: string) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.created === created);
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	};

	const state: TodoState = {
		loading,
		error,
		categories: defaultCategories,
		totalByCategory,
		totalTodos,
		completedTodos,
		searchValue,
		searchedTodos,
		openPanel,
	};

	const stateUpdaters: TodoStateUpdaters = {
		setSearchValue,
		handleAddTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		setOpenPanel,
		sincronizeTodos,
	};

	return {
		state,
		stateUpdaters,
	};
}

export default useTodos;
