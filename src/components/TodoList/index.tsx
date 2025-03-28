import React from 'react';
import { Todo } from '../../types';
import { isEmptyArray } from '../../utils';
import './TodoList.css';

interface TodoListProps {
	error: boolean;
	loading: boolean;
	totalTodos: number;
	searchedTodos: Todo[];
	onError: () => React.ReactNode;
	onLoading: () => React.ReactNode;
	onEmptysearchResult: () => React.ReactNode;
	onEmptyTodos: () => React.ReactNode;
	children: (todo: Todo) => React.ReactNode;
}

const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}
			{!props.loading && !props.totalTodos && props.onEmptyTodos()}
			{!props.loading && !!props.totalTodos && isEmptyArray(props.searchedTodos) && props.onEmptysearchResult()}
			{!props.loading && !props.error && props.searchedTodos.map(props.children)}
		</>
	);
};

export { TodoList };
