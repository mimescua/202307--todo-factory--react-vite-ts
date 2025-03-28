export interface Todo {
	text: string;
	completed: boolean;
	category: string;
	created: string;
}

export interface Category {
	text: string;
	color: string;
}

export interface TodoState {
	loading: boolean;
	error: boolean;
	categories: Category[];
	totalByCategory: () => Record<string, number>;
	totalTodos: number;
	completedTodos: number;
	searchValue: string;
	searchedTodos: Todo[];
	openPanel: boolean;
}

export interface TodoStateUpdaters {
	setSearchValue: (value: string) => void;
	handleAddTodo: (text: string, completed: boolean, category: string, created: string) => void;
	handleDeleteTodo: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCompleteTodo: (created: string) => void;
	setOpenPanel: (open: boolean) => void;
	sincronizeTodos: () => void;
}

export interface TodoItemProps {
	text: string;
	color: string;
	completed: boolean;
	created: string;
	onComplete: () => void;
	onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TodoListProps {
	error: boolean;
	loading: boolean;
	totalTodos: number;
	searchedTodos: Todo[];
	onError: () => React.ReactNode;
	onLoading: () => React.ReactNode;
	onEmptysearchResult: () => React.ReactNode;
	onEmptyTodos: () => React.ReactNode;
	children: (todo: Todo) => React.ReactNode;
}

export interface TodoSearchProps {
	searchValue: string;
	setSearchValue: (value: string) => void;
	loading: boolean;
}

export interface TodoFormProps {
	categories: Category[];
	setOpenPanel: (open: boolean) => void;
	handleAddTodo: (text: string, completed: boolean, category: string, created: string) => void;
}

export interface TodoCategoriesProps {
	categories: Category[];
	completedTodos: number;
	totalTodos: number;
	totalByCategory: () => Record<string, number>;
}

export interface TodoCounterProps {
	totalTodos: number;
	completedTodos: number;
}

export interface SidebarProps {
	loading: boolean;
	children: React.ReactNode;
}

export interface SidePanelProps {
	children: React.ReactNode;
}

export interface CreateTodoProps {
	setOpenPanel: (open: boolean) => void;
}

export interface ChangeAlertProps {
	sincronize: () => void;
}

export interface TodosEmptySearchProps {
	searchValue: string;
}

export interface LocalStorageState<T> {
	item: T;
	loading: boolean;
	error: boolean;
	sincronizedItem: boolean;
}

export type LocalStorageActionType = 'ERROR' | 'SUCCESS' | 'SAVE' | 'SINCRONIZE';

export interface LocalStorageAction<T> {
	type: LocalStorageActionType;
	payload?: T;
}
