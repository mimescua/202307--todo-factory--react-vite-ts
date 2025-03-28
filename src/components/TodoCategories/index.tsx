import React from 'react';
import { Category as CategoryType } from '../../types';
import { Category } from '../Buttons/Category';
import './TodoCategories.css';

interface TodoCategoriesProps {
	categories: CategoryType[];
	completedTodos: number;
	totalTodos: number;
	totalByCategory: () => Record<string, number>;
	loading: boolean;
}

const TodoCategories: React.FC<TodoCategoriesProps> = ({
	categories,
	completedTodos,
	totalTodos,
	totalByCategory,
	loading,
}) => {
	const todoProgress = totalTodos ? ((completedTodos * 100) / totalTodos).toFixed(1) : 0;
	return (
		<>
			<h3 className={`categories-title ${!!loading && 'categories-title--loading'}`}>CATEGORIES</h3>
			<div className={`categories ${!!loading && 'categories--loading'}`}>
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
			<div className={`progress-container ${!!loading && 'progress-container--loading'}`}>
				<div className="progress-filler" style={{ width: todoProgress ? `${todoProgress}%` : 0 }}>
					<span className="progress-label">{`${todoProgress ? todoProgress : 0}%`}</span>
				</div>
			</div>
		</>
	);
};

export { TodoCategories };
