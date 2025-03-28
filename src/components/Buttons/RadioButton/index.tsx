import React from 'react';
import './RadioButton.css';

interface RadioButtonProps {
	id: string;
	text: string;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, text, name, onChange, checked, value }) => {
	return (
		<label htmlFor={id} className="radiobutton-label">
			<input
				className="radiobutton-input"
				type="radio"
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<span className="custom-radiobutton" />
			{text}
		</label>
	);
};

export default RadioButton;
