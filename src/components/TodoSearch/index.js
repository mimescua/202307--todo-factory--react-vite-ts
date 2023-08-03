import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
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
}

export { TodoSearch };
