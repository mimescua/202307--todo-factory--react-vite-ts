import React from 'react';
import './TodoForm.css';

function TodoForm({ categories, setOpenPanel, handleAddTodo }) {
	const [todoValue, setTodoValue] = React.useState('');
	const [category, setCategory] = React.useState('none');

	const handleSubmit = (event) => {
		event.preventDefault();
		const created = new Date();
		handleAddTodo(todoValue, false, category, created.toISOString());
		setTodoValue('');
		setCategory('none');
		setOpenPanel(false);
	};

	const handleCancel = () => {
		setOpenPanel(false);
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<label htmlFor="category" className="form-category-picker-label">
				Select a category (*)
			</label>
			<select
				id="category"
				value={category}
				// defaultValue={categories[0].text}
				onChange={(e) => setCategory(e.target.value)}
				className="form-category-picker"
			>
				<option value="none" disabled hidden>
					categories available
				</option>
				{categories.map((category, index) => (
					<option key={index} value={category.text}>
						{category.text}
					</option>
				))}
			</select>
			<label htmlFor="text" className="form-category-text-label">
				Write your new TODO (*)
			</label>
			<textarea
				name="text"
				id="text"
				placeholder="Write your TODO details here"
				onChange={(e) => setTodoValue(e.target.value)}
				className="form-category-text"
			></textarea>
			<div className="todo-form-btn-container">
				<button
					onClick={handleCancel}
					className="todo-form-btn btn-cancel"
					type="button"
				>
					Cancel
				</button>
				<button className="todo-form-btn btn-save" type="submit">
					Save
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
