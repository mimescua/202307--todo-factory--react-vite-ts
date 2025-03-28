import React from 'react';
import { LocalStorageAction, LocalStorageActionType, LocalStorageState } from '../types';

function useLocalStorage<T>(itemName: string, initialValue: T) {
	const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
	const { item, loading, error, sincronizedItem } = state;

	const onError = () => dispatch({ type: actionTypes.error });
	const onSuccess = (item: T) => dispatch({ type: actionTypes.success, payload: item });
	const onSave = (item: T) => dispatch({ type: actionTypes.save, payload: item });
	const onSincronize = () => dispatch({ type: actionTypes.sincronize });

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);

				let parsedItem: T;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				onSuccess(parsedItem);
			} catch (error) {
				onError();
			}
		}, 2000);
	}, [sincronizedItem]);

	const saveItem = (newItem: T) => {
		try {
			localStorage.setItem(itemName, JSON.stringify(newItem));
			onSave(newItem);
		} catch (error) {
			onError();
		}
	};

	const sincronizeItem = () => {
		onSincronize();
	};

	return { item, saveItem, loading, error, sincronizeItem };
}

const initialState = <T>({ initialValue }: { initialValue: T }): LocalStorageState<T> => ({
	item: initialValue,
	loading: true,
	error: false,
	sincronizedItem: true,
});

const actionTypes: Record<string, LocalStorageActionType> = {
	error: 'ERROR',
	success: 'SUCCESS',
	save: 'SAVE',
	sincronize: 'SINCRONIZE',
};

const reducerObject = <T>(state: LocalStorageState<T>, payload: T | Error) => ({
	[actionTypes.error]: { ...state, error: true },
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		sincronizedItem: true,
		item: payload as T,
	},
	[actionTypes.save]: { ...state, item: payload as T },
	[actionTypes.sincronize]: {
		...state,
		loading: true,
		sincronizedItem: false,
	},
});

const reducer = <T>(state: LocalStorageState<T>, action: LocalStorageAction<T>) => {
	return reducerObject(state, action.payload as T)[action.type] || state;
};

export default useLocalStorage;
