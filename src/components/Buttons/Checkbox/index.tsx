import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
	label: string;
	value: boolean;
	onChange: () => void;
	color: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange, color }) => {
	return (
		<label>
			<input
				type="checkbox"
				checked={value}
				onChange={onChange}
				style={{ borderColor: color, background: `${value ? color : 'none'}` }}
			/>
			{label}
		</label>
	);
};

export { Checkbox };
