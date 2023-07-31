import './RadioButton.css';

const RadioButton = ({ id, text, name, onChange, checked, value }) => {
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
