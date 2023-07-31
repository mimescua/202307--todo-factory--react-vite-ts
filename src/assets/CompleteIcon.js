import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed }) {
	return <TodoIcon type="complete" color={completed ? 'blue' : 'gray'} />;
}

export { CompleteIcon };
