export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
	return JSON.stringify(obj) === '{}';
};

export const isEmptyArray = <T>(arr: T[]): boolean => {
	return JSON.stringify(arr) === '[]';
};

function generateColor(): string {
	const hexArray: (number | string)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	let code = '';
	for (let i = 0; i < 6; i++) {
		code += hexArray[Math.floor(Math.random() * 16)];
	}
	return `#${code}`;
}

type PreventFunction = (e: Event | undefined, ...params: unknown[]) => void;

function prevent(fn: PreventFunction, defaultOnly: boolean): PreventFunction {
	return (e, ...params) => {
		e && e.preventDefault();
		!defaultOnly && e && e.stopPropagation();
		fn(e, ...params);
	};
}

export { generateColor, prevent };
