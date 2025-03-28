import React, { useState } from 'react';
import { Checkbox } from '../Buttons/Checkbox';
import './TodoItem.css';

interface TodoItemProps {
	text: string;
	color: string;
	completed: boolean;
	created: string;
	onComplete: () => void;
	onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, color, completed, created, onComplete, onDelete }) => {
	const [deleted, setDeleted] = useState(false);
	const [active] = useState(false);

	const handleDelete = () => {
		setDeleted(!deleted);
	};

	return (
		<li>
			<div className={`todo-item delete-warning`}>
				<button className="complete-delete" onClick={handleDelete}>
					UNDO
				</button>
				<span className="title">The task was selected to be removed. Confirm!</span>
				<button className="delete-icon" onClick={onDelete} value={created} />
			</div>
			<div className={`todo-item display ${completed && 'checked'} ${active && 'active'} ${deleted && 'deleted'}`}>
				<Checkbox label="" value={completed} onChange={onComplete} color={color} />
				<span className="title">{text}</span>
				<button className="set-delete" onClick={handleDelete} />
			</div>
		</li>
	);
};

export { TodoItem };
