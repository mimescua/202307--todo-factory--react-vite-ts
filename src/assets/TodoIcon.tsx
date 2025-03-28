import React from 'react';
import CheckSVG from './svg/check.svg?react';
import DeleteSVG from './svg/x.svg?react';
import './TodoIcon.css';

type IconType = 'complete' | 'delete';
type IconColor = string;

interface IconTypes {
	complete: (color: IconColor) => React.ReactElement;
	delete: (color: IconColor) => React.ReactElement;
}

const iconTypes: IconTypes = {
	complete: (color) => <CheckSVG className="icon-svg" stroke={color} />,
	delete: (color) => <DeleteSVG className="icon-svg" stroke={color} />,
};

interface TodoIconProps {
	type: IconType;
	color: IconColor;
}

const TodoIcon: React.FC<TodoIconProps> = ({ type, color }) => {
	return <span className={`icon-container icon-container-${type}`}>{iconTypes[type](color)}</span>;
};

export { TodoIcon };
