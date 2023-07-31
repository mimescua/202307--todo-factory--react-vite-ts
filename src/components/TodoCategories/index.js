import React from 'react';
import { Category } from '../Buttons/Category';
import './TodoCategories.css';

function TodoCategories({
	categories,
	completedTodos,
	totalTodos,
	totalByCategory,
}) {
	const todoProgress = totalTodos
		? ((completedTodos * 100) / totalTodos).toFixed(1)
		: 0;
	return (
		<>
			<h3 className="categories-title">CATEGORIES</h3>
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
			<div className="progress-container">
				<div
					className="progress-filler"
					style={{ width: todoProgress ? `${todoProgress}%` : 0 }}
				>
					<span className="progress-label">{`${
						todoProgress ? todoProgress : 0
					}%`}</span>
				</div>
			</div>
		</>
	);
}
export { TodoCategories };
