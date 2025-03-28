import React from 'react';

interface TodosEmptySearchProps {
	searchValue: string;
}

const TodosEmptySearch: React.FC<TodosEmptySearchProps> = ({ searchValue }) => {
	return <p>No results for {searchValue}</p>;
};

export default TodosEmptySearch;
