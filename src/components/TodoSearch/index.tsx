import React from 'react';
import './TodoSearch.css';

interface TodoSearchProps {
	searchValue: string;
	setSearchValue: (value: string) => void;
	loading: boolean;
}

const TodoSearch: React.FC<TodoSearchProps> = ({ searchValue, setSearchValue, loading }) => {
	return (
		<div className="search">
			<input
				className="search-box"
				placeholder="Search..."
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				disabled={loading}
			/>
		</div>
	);
};

export { TodoSearch };
