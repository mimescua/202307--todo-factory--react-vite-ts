import React from 'react';

interface UseStorageListenerReturn {
	show: boolean;
	toggleShow: (show: boolean) => void;
}

function useStorageListener(sincronize: () => void): UseStorageListenerReturn {
	const [storageChange, setStorageChange] = React.useState(false);

	React.useEffect(() => {
		const handleStorageChange = (change: StorageEvent) => {
			if (change.key === 'TODOS_V1') {
				console.log('hubo cambios en TODOS_V1');
				setStorageChange(true);
			}
		};

		window.addEventListener('storage', handleStorageChange);
		return () => window.removeEventListener('storage', handleStorageChange);
	}, []);

	const toggleShow = (show: boolean) => {
		if (!show) {
			sincronize();
		}
		setStorageChange(show);
	};

	return {
		show: storageChange,
		toggleShow,
	};
}

export { useStorageListener };
