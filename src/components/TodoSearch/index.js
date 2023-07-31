import React from 'react';
import { TodoContext } from '../../context';
import './TodoSearch.css';

function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
