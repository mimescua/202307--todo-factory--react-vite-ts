import React from 'react';
import { useLocalStorage } from '.';
import { generateColor } from '../utils';

const defaultCategories = [
	{ text: 'Importants', color: generateColor() }, // : used to change name
	{ text: 'Planned', color: generateColor() },
	{ text: 'Personal', color: generateColor() },
];

function useTodos() {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openPanel, setOpenPanel] = React.useState(false);

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

	const handleAddTodo = (text, completed, category, created) => {
		const newTodos = [...todos];
		newTodos.push({ text, completed, category, created });
		saveTodos(newTodos);
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

	return {
		loading,
		error,
		categories: defaultCategories,
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
	};
}

export default useTodos;
