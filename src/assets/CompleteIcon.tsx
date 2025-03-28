import React from 'react';
import { TodoIcon } from './TodoIcon';

interface CompleteIconProps {
	completed: boolean;
}

const CompleteIcon: React.FC<CompleteIconProps> = ({ completed }) => {
	return <TodoIcon type="complete" color={completed ? 'blue' : 'gray'} />;
};

export { CompleteIcon };
