import { useState } from 'react';
import './TodoItem.css';
import { Checkbox } from '../Buttons/Checkbox';

function TodoItem({ text, color, completed, created, onComplete, onDelete }) {
	const [checked, setChecked] = useState(completed);
	const [deleted, setDeleted] = useState(false);
	const [active, setActive] = useState(false);

	const handleChange = () => {
		onComplete();
		setChecked(!checked);
	};
	const handleDelete = () => {
		setDeleted(!deleted);
	};

	return (
		<li>
			<div className={`todo-item delete-warning`}>
				<button className="complete-delete" onClick={handleDelete}>
					UNDO
				</button>
				<span className="title">
					The task was selected to be removed. Confirm!
				</span>
				<button className="delete-icon" onClick={onDelete} value={created} />
			</div>
			<div
				className={`todo-item display ${completed && 'checked'} ${
					active && 'active'
				} ${deleted && 'deleted'}`}
			>
				<Checkbox
					label=""
					value={completed}
					onChange={onComplete}
					color={color}
				/>
				<span className="title">{text}</span>
				<button className="set-delete" onClick={handleDelete} />
			</div>
		</li>
	);
}

export { TodoItem };
