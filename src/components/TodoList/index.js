import { isEmptyArray } from '../../utils';
import './TodoList.css';

function TodoList(props) {
	return (
		<>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}
			{!props.loading && !props.totalTodos && props.onEmptyTodos()}
			{!props.loading &&
				!!props.totalTodos &&
				isEmptyArray(props.searchedTodos) &&
				props.onEmptysearchResult()}
			{/* {props.searchedTodos.map((todo) => props.render(todo))} */}
			{props.searchedTodos.map(props.children ?? props.render)}
		</>
	);
}

export { TodoList };
