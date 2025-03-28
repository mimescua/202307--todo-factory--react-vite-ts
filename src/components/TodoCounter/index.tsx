import React from 'react';
import './TodoCounter.css';

interface TodoCounterProps {
	totalTodos: number;
	completedTodos: number;
	loading: boolean;
}

const TodoCounter: React.FC<TodoCounterProps> = ({ totalTodos, completedTodos, loading }) => {
	return (
		<h3 className={`todo-counter-title ${!!loading && 'todo-counter-title--loading'}`}>
			{totalTodos === 0
				? "You don't have any TODO"
				: totalTodos === completedTodos
					? 'Congrats! All of your TODOS have been completed'
					: `You completed ${completedTodos} of ${totalTodos} TODOS`}
		</h3>
	);
};

export { TodoCounter };
