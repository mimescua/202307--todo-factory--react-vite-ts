import { AppUI } from './AppUI';
import { TodoProvider } from '../context';

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
