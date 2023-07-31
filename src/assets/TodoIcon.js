import React from 'react';
import { ReactComponent as CheckSVG } from './svg/check.svg';
import { ReactComponent as DeleteSVG } from './svg/x.svg';
import './TodoIcon.css';

const iconTypes = {
	complete: (color) => <CheckSVG className="icon-svg" stroke={color} />,
	delete: (color) => <DeleteSVG className="icon-svg" stroke={color} />,
};

function TodoIcon({ type, color }) {
	return (
		<span className={`icon-container icon-container-${type}`}>
			{iconTypes[type](color)}
		</span>
	);
}

export { TodoIcon };
