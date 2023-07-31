import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
	return (
		<h3 className="todo-counter-title">
			{totalTodos === 0
				? "You don't have any TODO"
				: totalTodos === completedTodos
				? 'Congrats! All of your TODOS have been completed'
				: `You completed ${completedTodos} of ${totalTodos} TODOS`}
		</h3>
	);
}
export { TodoCounter };
