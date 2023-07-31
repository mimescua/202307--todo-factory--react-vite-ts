import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
	return (
		<div className="search">
			<input
				className="search-box"
				placeholder="Search..."
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			/>
		</div>
	);
}

export { TodoSearch };
